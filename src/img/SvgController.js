import { svgImages } from '../variables'

class SvgController {


  getImageHtml (type) {
    return svgImages.find(image => image.type === type).value
  }
  initDomElement(id) {
    this.$el = document.querySelector(id)
  }
  addStyles (styles) {
    Object.keys(styles).forEach(property => {
      this.$el.style[property] = styles[property]
    })
  }
}

export {SvgController}
