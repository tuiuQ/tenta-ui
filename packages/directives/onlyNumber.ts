export default {
  mounted: (el: HTMLElement) => {
    console.log(el);
    const oInput = el.querySelector('inner') as HTMLInputElement;

    oInput.addEventListener('blur', () => {
      console.log(oInput);
    })
  }
}
