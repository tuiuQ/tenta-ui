import { hideElement, showElement } from '../utils/tools'


export default {
  mounted: (el: HTMLObjectElement) => {
    const oInput = el.querySelector('.inner') as HTMLInputElement,
          oPlaceHolder = el.querySelector('.te-placeholder') as HTMLLabelElement,
          oCloseIcon = el.querySelector('.te-icon-outlined_close')

    if (oInput.value.length > 0) {
      hideElement(oPlaceHolder)
      if (oCloseIcon) {
        showElement(oCloseIcon)
      }
    }

    oInput.addEventListener('focus', () => {
      hideElement(oPlaceHolder)
      if (oInput.value.length > 0) {
        if (oCloseIcon) {
          showElement(oCloseIcon)
        }
      }
    })

    oInput.addEventListener('blur', () => {
      if (oInput.value.length === 0) {
        showElement(oPlaceHolder)
        if (oCloseIcon) {
          hideElement(oCloseIcon)
        }
      }
    })

    oInput.addEventListener('input', () => {
      if (oInput.value.length > 0) {
        if (oCloseIcon) {
          showElement(oCloseIcon)
        }
      } else {
        if (oCloseIcon) {
          hideElement(oCloseIcon)
        }
      }
    })


  }
}
