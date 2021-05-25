import { Module } from './modules/module'
import { vnode, VNode } from './vnode'
import * as is from './is'
import { htmlDomApi, DOMAPI } from './htmldomapi'

type NonUndefined<T> = T extends undefined ? never : T

function isUndef (s: any): boolean {
  return s === undefined
}
function isDef<A> (s: A): s is NonUndefined<A> {
  return s !== undefined
}

type VNodeQueue = VNode[]

const emptyNode = vnode('', {}, [], undefined, undefined)

function sameVnode (vnode1: VNode, vnode2: VNode): boolean {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel
}

function isVnode (vnode: any): vnode is VNode {
  return vnode.sel !== undefined
}

type KeyToIndexMap = {[key: string]: number}

type ArraysOf<T> = {
  [K in keyof T]: Array<T[K]>;
}

type ModuleHooks = ArraysOf<Required<Module>>

function createKeyToOldIdx (children: VNode[], beginIdx: number, endIdx: number): KeyToIndexMap {
  const map: KeyToIndexMap = {}
  for (let i = beginIdx; i <= endIdx; ++i) {
    const key = children[i]?.key
    if (key !== undefined) {
      map[key] = i
    }
  }
  return map
}

const hooks: Array<keyof Module> = ['create', 'update', 'remove', 'destroy', 'pre', 'post']

export function init (modules: Array<Partial<Module>>, domApi?: DOMAPI) {
  let i: number
  let j: number
  const cbs: ModuleHooks = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  }

  const api: DOMAPI = domApi !== undefined ? domApi : htmlDomApi

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = []
    for (j = 0; j < modules.length; ++j) {
      const hook = modules[j][hooks[i]]
      if (hook !== undefined) {
        (cbs[hooks[i]] as any[]).push(hook)
      }
    }
  }

  function emptyNodeAt (elm: Element) {
    // app: <div id="app"></div>
    const id = elm.id ? '#' + elm.id : ''
    const c = elm.className ? '.' + elm.className.split(' ').join('.') : ''
    return vnode(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm)
  }

  function createRmCb (childElm: Node, listeners: number) {
    return function rmCb () {
      if (--listeners === 0) {
        const parent = api.parentNode(childElm) as Node
        api.removeChild(parent, childElm)
      }
    }
  }
  /**
   * 创建vnode.elm (真实DOM)
   * @param vnode 
   * @param insertedVnodeQueue 
   * @returns 返回创建的DOM, 不渲染
   */
  function createElm (vnode: VNode, insertedVnodeQueue: VNodeQueue): Node {
    let i: any
    let data = vnode.data
    // 执行用户设置的钩子函数
    if (data !== undefined) {
      const init = data.hook?.init
      // init !== undefined
      if (isDef(init)) {
        init(vnode)
        data = vnode.data
      }
    }
    const children = vnode.children
    const sel = vnode.sel
    // 把vnode 转换真是DOM对象 (没有渲染到页面)
    // sel === '!' 创建注释节点
    if (sel === '!') {
      // vnode.text === undefined
      if (isUndef(vnode.text)) {
        vnode.text = ''
      }
      vnode.elm = api.createComment(vnode.text!)
    } else if (sel !== undefined) {
      // 解析标签
      const hashIdx = sel.indexOf('#')
      const dotIdx = sel.indexOf('.', hashIdx)
      const hash = hashIdx > 0 ? hashIdx : sel.length
      const dot = dotIdx > 0 ? dotIdx : sel.length
      const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel
      // DOM
      const elm = vnode.elm = isDef(data) && isDef(i = data.ns)
        ? api.createElementNS(i, tag)
        : api.createElement(tag)
      if (hash < dot) elm.setAttribute('id', sel.slice(hash + 1, dot))
      if (dotIdx > 0) elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '))
      // 执行create钩子函数
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode)
      // 子节点
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          const ch = children[i]
          if (ch != null) {
            // 递归子节点
            api.appendChild(elm, createElm(ch as VNode, insertedVnodeQueue))
          }
        }
      } 
      // 文本
      else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text))
      }
      // 钩子函数
      const hook = vnode.data!.hook
      if (isDef(hook)) {
        hook.create?.(emptyNode, vnode)
        if (hook.insert) {
          // 存储insert钩子函数到队列中
          insertedVnodeQueue.push(vnode)
        }
      }
    } else {
      // 选择器为空, 创建文本节点
      vnode.elm = api.createTextNode(vnode.text!)
    }
    // 返回创建的DOM
    return vnode.elm
  }

  /**
   * 添加节点
   * @param parentElm 父元素
   * @param before 要插入这个元素之前
   * @param vnodes 要插入的节点[]
   * @param startIdx 开始索引
   * @param endIdx 结束索引
   * @param insertedVnodeQueue 存储insert钩子函数
   */
  function addVnodes (
    parentElm: Node,
    before: Node | null,
    vnodes: VNode[],
    startIdx: number,
    endIdx: number,
    insertedVnodeQueue: VNodeQueue
  ) {
    for (; startIdx <= endIdx; ++startIdx) {
      // vnode节点
      const ch = vnodes[startIdx]
      if (ch != null) {
        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before)
      }
    }
  }

  // destroy钩子函数, 删除dom之前执行的
  function invokeDestroyHook (vnode: VNode) {
    const data = vnode.data
    if (data !== undefined) {
      data?.hook?.destroy?.(vnode)
      // 执行destroy钩子函数
      for (let i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode)
      // 如果有子节点, 递归调用invokeDestroyHook, 执行destroy钩子函数
      if (vnode.children !== undefined) {
        for (let j = 0; j < vnode.children.length; ++j) {
          const child = vnode.children[j]
          if (child != null && typeof child !== 'string') {
            invokeDestroyHook(child)
          }
        }
      }
    }
  }

  /**
   * 删除节点
   * @param parentElm 父节点
   * @param vnodes 要删除的节点[]
   * @param startIdx 删除节点的开始位置
   * @param endIdx 删除节点的结束位置
   */
  function removeVnodes (parentElm: Node,
    vnodes: VNode[],
    startIdx: number,
    endIdx: number): void {
    for (; startIdx <= endIdx; ++startIdx) {
      let listeners: number
      let rm: () => void
      // 要删除的节点/文本
      const ch = vnodes[startIdx]
      if (ch != null) {
        // 有sel 是元素节点
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch)
          listeners = cbs.remove.length + 1
          // 返回一个rm函数(目的是缓存一个rm), 函数中会先--listeners
          rm = createRmCb(ch.elm!, listeners)
          // remove钩子函数
          for (let i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm)
          const removeHook = ch?.data?.hook?.remove
          if (isDef(removeHook)) {
            // 有钩子函数时
            removeHook(ch, rm)
          } else {
            rm()
          }
        } 
        // 没有sel, 则是文本节点
        else { 
          api.removeChild(parentElm, ch.elm!)
        }
      }
    }
  }

  /**
   * diff算法 (优化: 只比较同级别的子节点)
   * 新旧子节点不相同, 对比所有子节点
   * @param parentElm 父元素(dom元素)
   * @param oldCh 旧节点所有子节点
   * @param newCh 新节点所有子节点
   * @param insertedVnodeQueue 存放insert钩子函数的队列
   */
  function updateChildren (parentElm: Node,
    oldCh: VNode[], // 旧节点所有子节点
    newCh: VNode[], // 新节点所有子节点
    insertedVnodeQueue: VNodeQueue) {
    let oldStartIdx = 0   // 旧开始索引
    let newStartIdx = 0   // 新开始索引
    let oldEndIdx = oldCh.length - 1  // 旧结束索引
    let oldStartVnode = oldCh[0]  // 旧开始节点
    let oldEndVnode = oldCh[oldEndIdx]  // 旧结束节点
    let newEndIdx = newCh.length - 1  // 新结束索引
    let newStartVnode = newCh[0]  // 新开始节点
    let newEndVnode = newCh[newEndIdx]  //新结束节点
    let oldKeyToIdx: KeyToIndexMap | undefined
    let idxInOld: number
    let elmToMove: VNode
    let before: any
    // 同级别之间的比较
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      // 判断 null
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode might have been moved left
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx]
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx]
      } 
      // 比较开始和结束的四种情况
      // 1. 旧开始节点和新开始节点
      else if (sameVnode(oldStartVnode, newStartVnode)) {
        // 比较新旧node的差异, 更新到DOM上
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } 
      // 2. 旧结束节点, 新结束节点
      else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } 
      // 3. 旧开始节点, 旧结束节点
      else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        // 把旧的开始节点dom元素, 移动到旧的结束节点dom元素之后
        api.insertBefore(parentElm, oldStartVnode.elm!, api.nextSibling(oldEndVnode.elm!))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } 
      // 4. 旧结束节点, 新开始节点
      else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        // 把旧的开始节点dom元素, 移动到旧的结束节点dom元素之前
        api.insertBefore(parentElm, oldEndVnode.elm!, oldStartVnode.elm!)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
        // 开始和结尾比较之后
        // 开始比较key
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        }
        idxInOld = oldKeyToIdx[newStartVnode.key as string]
        // 旧节点找不到
        if (isUndef(idxInOld)) { 
          // 创建新节点， 放到老节点之前
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
        } 
        // 旧节点找到
        else {
          elmToMove = oldCh[idxInOld]//存储老节点
          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
            oldCh[idxInOld] = undefined as any
            // 移动老节点 到旧节点之前
            api.insertBefore(parentElm, elmToMove.elm!, oldStartVnode.elm!)
          }
        }
        newStartVnode = newCh[++newStartIdx]
      }
    }
    // 循环结束的收尾工作
    if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
      if (oldStartIdx > oldEndIdx) {
        // 老节点遍历完, 新节点有剩余
        before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm
        addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
      } else {
        // 新节点遍历完, 老节点有剩余
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
      }
    }
  }

  /**
   * 比较新旧node的差异, 更新到DOM上
   * @param oldVnode 
   * @param vnode 
   * @param insertedVnodeQueue 存储insert钩子函数
   * @returns 
   */
  function patchVnode (oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {
    // 触发prepatch钩子函数
    const hook = vnode.data?.hook
    hook?.prepatch?.(oldVnode, vnode)
    const elm = vnode.elm = oldVnode.elm!
    // 旧vnode子节点
    const oldCh = oldVnode.children as VNode[]
    // 新vnode子节点
    const ch = vnode.children as VNode[]
    // 如果新旧vnode一样, 不需要比较了
    if (oldVnode === vnode) return
    if (vnode.data !== undefined) {
      // 触发update钩子函数
      for (let i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)
      vnode.data.hook?.update?.(oldVnode, vnode)
    }

    // 比较新旧vnode差异
    // isUndef: s === undefined, isDef: s !== undefined
    // 1. 新vnode没有text节点, 继续比较它的子节点
    if (isUndef(vnode.text)) {
      // 1.1 都有子节点
      if (isDef(oldCh) && isDef(ch)) {
        // 新旧子节点不相同, 对比所有子节点
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
      } 
      // 1.2 新节点有子节点
      else if (isDef(ch)) {
        // 如果老节点有text, 清空
        if (isDef(oldVnode.text)) api.setTextContent(elm, '')
        // 插入新节点
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      }
      // 1.3 老节点有子节点 
      else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      } 
      // 1.4 清空老节点文本内容
      else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, '')
      }
    } 
    // 2. 新旧节点的text不相等 (相等就不用判断了)
    else if (oldVnode.text !== vnode.text) {
      // 2.1 如果老节点有子节点
      if (isDef(oldCh)) {
        // 删除
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      }
      // 更新text值, DOM没有变化
      api.setTextContent(elm, vnode.text!)
    }
    // 触发postpatch钩子函数
    hook?.postpatch?.(oldVnode, vnode)
  }

  return function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
    let i: number, elm: Node, parent: Node
    // 插入节点队列, 目的触发插入的钩子函数
    const insertedVnodeQueue: VNodeQueue = []
    // 遍历cbs中的pre钩子函数
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]()

    // 是否是vnode对象, vnode.sel !== undefined
    if (!isVnode(oldVnode)) {
      // 转换为vnode
      oldVnode = emptyNodeAt(oldVnode)
    }
    // 判断新旧vnode 的 sel, key
    if (sameVnode(oldVnode, vnode)) {
      // 比较新旧node的差异, 更新到DOM上
      patchVnode(oldVnode, vnode, insertedVnodeQueue)
    } else {
      // !表示这个属性一定是有值的
      elm = oldVnode.elm!
      parent = api.parentNode(elm) as Node

      // 创建节点的真实DOM元素(vnode.elm), 不渲染
      createElm(vnode, insertedVnodeQueue)

      if (parent !== null) {
        api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
        removeVnodes(parent, [oldVnode], 0, 0)
      }
    }

    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      // 执行inser钩子函数
      insertedVnodeQueue[i].data!.hook!.insert!(insertedVnodeQueue[i])
    }
    // 执行post钩子函数
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]()
    return vnode
  }
}
