export default {
  created: (el: HTMLElement, binding: any): void => {
    console.log(el);
    let lazyLoadObser = new IntersectionObserver((entries: any, observer: any): void => {
      entries.forEach((entry: any, index: number): void => {
        let lazyImage = entry.target
        if (entry.intersectionRatio > 0) {
          lazyImage.src = binding.value
          lazyLoadObser.unobserve(lazyImage)
        }
      })
    })

    lazyLoadObser.observe(el)
  },
  mounted: (el: HTMLElement, binding: any): void => {

  }
}
