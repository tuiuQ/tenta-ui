import { hideElement, showElement } from '../../../utils/tools'

export default {
  mounted: (el: HTMLElement): void => {

    const oSelectorInput = el.querySelector('.an-selector-input') as HTMLDivElement,
      oSelectorMenu = el.querySelector('.an-selector-menu') as HTMLDivElement;

    const oInput = oSelectorInput.querySelector('input') as HTMLInputElement,
      oPlaceHolder = oSelectorInput.querySelector('label') as HTMLLabelElement,
      oIcon = oSelectorInput.querySelector('span') as HTMLSpanElement;

    const searchIconName: string = 'icon an-icon-outlined_search'
    const downIconName: string = 'icon an-icon-outlined_down_linedefuben'


    oInput.addEventListener('focus', (): void => {
      hideElement(oPlaceHolder)
      oIcon.className = searchIconName;
      setTimeout(() => {
        showElement(oSelectorMenu)
      }, 200)
    }, false)

    oInput.addEventListener('blur', (): void => {

      oIcon.className = downIconName;
      setTimeout(() => {
        hideElement(oSelectorMenu)
        // @ts-ignore
        if (oInput.value.length === 0) {
          showElement(oPlaceHolder)
        }
      }, 200)
    }, false)
  }
}
