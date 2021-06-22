export default {
  mounted: (el: HTMLElement): void => {
    const oInput = el.querySelector('.an-input') as HTMLInputElement

    oInput.addEventListener('input', () => {
      if (oInput.value) {
        oInput.value = '1'
      }
    })
  }
}
