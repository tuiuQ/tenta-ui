import ResizeObserver from 'resize-observer-polyfill'
import isServer from './isServer'
// 解决CustomizedHTMLElement无法找到的问题
import './types.d'

export type ResizableElement = CustomizedHTMLElement<{
  __resizeListeners__: Array<(...args: unknown[]) => unknown>
  __ro__: ResizeObserver
}>


const resizeHandler = (entries: ResizeObserverEntry[]): void => {
  for (const entry of entries) {
    const listeners =
      (entry.target as ResizableElement).__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach((fn: () => void): void => {
        fn()
      })
    }
  }
}

export const addResizeListener = (
  el: ResizableElement,
  fn: (...args: unknown[]) => unknown
): void => {
  if (isServer || !el) return
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = []
    el.__ro__ = new ResizeObserver(resizeHandler)
    el.__ro__.observe(el)
  }
  el.__resizeListeners__.push(fn)
}

export const removeResizeListener = (
  el: ResizableElement,
  fn: (...args: unknown[]) => unknown
): void => {
  if (!el || !el.__resizeListeners__) return
  el.__resizeListeners__.splice(el.__resizeListeners__.indexOf(fn), 1)
  if (!el.__resizeListeners__.length) {
    el.__ro__.disconnect()
  }
}
