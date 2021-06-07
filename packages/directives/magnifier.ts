import { getStyle } from '../utils/tools'
import { XY } from '../types/data-types'


export default {
  mounted: function (el: any): void {
    const oImgWrap = el,
      oMagWrap = oImgWrap.querySelector('.mag-wrap'),
      oMagImg = oMagWrap.querySelector('.mag-img'),
      imgWidth = getStyle(oImgWrap, 'width'),
      imgHeight = getStyle(oImgWrap, 'height'),
      magWidth = getStyle(oMagWrap, 'width'),
      magHeight = getStyle(oMagWrap, 'height'),
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop

    const init = (): void => {
      bindEvents()
    }

    function bindEvents(): void {
      oImgWrap.addEventListener('mouseover', (e: MouseEvent) => {
        oMagWrap.className += ' show'
        showMag(getXY(e).x, getXY(e).y, getXY(e).mouseX, getXY(e).mouseY)
        document.addEventListener('mousemove', handleMouseMove, false)
      }, false)

      oImgWrap.addEventListener('mouseout', handleMouseOut, false)
    }

    function handleMouseMove(e: MouseEvent): void {
      const { x, y, mouseX, mouseY } = getXY(e)
      showMag(x, y, mouseX, mouseY)
    }

    function handleMouseOut() {
      oMagWrap.className = 'mag-wrap'
      document.removeEventListener('mousemove', handleMouseMove, false)
    }

    function showMag(x: number, y: number, mouseX: number, mouseY: number): void {
      oMagWrap.style.left = x + 'px'
      oMagWrap.style.top = y + 'px'
      oMagImg.style.left = - x + 'px'
      oMagImg.style.top = - y + 'px'

      if (mouseX < 0 || mouseY < 0 ||
        mouseX > imgHeight || mouseY > imgWidth
      ) {
        oMagWrap.className = 'mag-wrap'
        document.removeEventListener('mousemove', handleMouseMove)
      }

    }

    function getXY(e: MouseEvent): XY {
      return {
        x: e.pageX - imgX - (magWidth / 2),
        y: e.pageY - imgY - (magHeight / 2),
        mouseY: e.pageX - imgX,
        mouseX: e.pageY - imgY
      }
    }

    init()
  }
}
