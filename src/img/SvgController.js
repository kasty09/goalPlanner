import { svgImages } from '../variables'

export class SvgController {
  constructor (type) {
    this.type = type
  }

  getImageHtml () {
    return svgImages.find(image => image.type === this.type).value
  }
}
