// 是否是数组
export const array = Array.isArray
// 是否是字符串或者数字
export function primitive (s: any): s is (string | number) {
  return typeof s === 'string' || typeof s === 'number'
}
