export default {
  mounted: (el: HTMLElement) => {
    const oInput = el.querySelector('.an-input--inner') as HTMLInputElement

    const oSuffixClearIcon = el.querySelector('.an-input--suffix .an-input--clear') as HTMLElement,
          oSuffixViewIcon = el.querySelector('.an-input--suffix .an-input--view') as HTMLElement

    const oPrepend = el.querySelector('.an-input-group__prepend') as HTMLDivElement,
          oPrefix = el.querySelector('.an-input--prefix') as HTMLSpanElement,
          oAppend = el.querySelector('.an-input-group__append') as HTMLDivElement,
          oSuffix = el.querySelector('.an-input--suffix') as HTMLSpanElement

    if (oPrepend && oPrefix) {
      oPrefix.style.left = (oPrepend.offsetWidth + 5) + 'px'
    }

    if (oAppend && oSuffix) {
      oSuffix.style.right = (oAppend.offsetWidth + 5) + 'px'
      oSuffix.style.lineHeight = (oAppend.offsetHeight) + 'px'
    }

    _showHideIcon(oSuffixClearIcon)
    // _showHideIcon(oSuffixViewIcon)

    oInput.addEventListener('focus', () => {
      _showHideIcon(oSuffixClearIcon)
    })

    oInput.addEventListener('blur', () => {
      if (oSuffixClearIcon) {
        setTimeout(() => {
          oSuffixClearIcon.style.display = 'none'
        }, 200)
      }
    })

    oInput.addEventListener('input', () => {
      _showHideIcon(oSuffixClearIcon)
      _showHideIcon(oSuffixViewIcon)
    })


    function _showHideIcon(el: HTMLElement) {
      if (el) {
        if (oInput.value.length === 0) {
          setTimeout(() => {
            el.style.display = 'none'
          }, 200)
        } else {
          el.style.display = 'block'
        }
      }
    }
  }
}
