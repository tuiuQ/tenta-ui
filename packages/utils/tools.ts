export function getStyle (el: HTMLElement, prop: string): number {
  // @ts-ignore
  return parseInt(window.getComputedStyle(el, null)[prop])
}

export function hideElement(ele: any): void {
  ele.style.display = 'none'
}

export function showElement(ele: any): void {
  ele.style.display = 'block'
}
