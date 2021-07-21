import { vnode, VNode } from './vnode'
import { htmlDomApi, DOMAPI } from './htmldomapi'

export function toVNode (node: Node, domApi?: DOMAPI): VNode {
  // domApi: 如果不指定, 或者不传参数, 默认是htmldom
  const api: DOMAPI = domApi !== undefined ? domApi : htmlDomApi
  let text: string
  if (api.isElement(node)) {
    // 元素节点
    const id = node.id ? '#' + node.id : ''
    const cn = node.getAttribute('class')
    const c = cn ? '.' + cn.split(' ').join('.') : ''
    const sel = api.tagName(node).toLowerCase() + id + c
    const attrs: any = {}
    const children: VNode[] = []
    let name: string
    let i: number, n: number
    const elmAttrs = node.attributes
    const elmChildren = node.childNodes
    for (i = 0, n = elmAttrs.length; i < n; i++) {
      name = elmAttrs[i].nodeName
      if (name !== 'id' && name !== 'class') {
        attrs[name] = elmAttrs[i].nodeValue
      }
    }
    for (i = 0, n = elmChildren.length; i < n; i++) {
      children.push(toVNode(elmChildren[i], domApi))
    }
    return vnode(sel, { attrs }, children, undefined, node)
  } else if (api.isText(node)) {
    // 文本
    text = api.getTextContent(node) as string
    return vnode(undefined, undefined, undefined, text, node)
  } else if (api.isComment(node)) {
    // 注释
    text = api.getTextContent(node) as string
    return vnode('!', {}, [], text, node as any)
  } else {
    // 空字符串
    return vnode('', {}, [], undefined, node as any)
  }
}
