import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

const rangeSlider = () => {
  const slider = document.querySelector('.price-filter__slider')
  const priceFrom = document.querySelector('.price-filter__price-from')
  const priceTo = document.querySelector('.price-filter__price-to')

  noUiSlider.create(slider, {
    start: [250, 750],
    connect: true,
    range: {
      min: 0,
      max: 999,
    },
  })

  slider.noUiSlider.on('update', function (values, handle) {
    if (handle) {
      priceTo.textContent = Math.round(values[handle])
    } else {
      priceFrom.textContent = Math.round(values[handle])
    }
  })
}

function testWebP() {
  const checkWebp = (callback) => {
    const webP = new Image()

    webP.onload = webP.onerror = () => callback(webP.height === 2)
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }

  checkWebp((support) => {
    const className = support ? 'webp' : 'no-webp'
    document.body.classList.add(className)
    FLS(support ? 'webp поддерживается' : 'webp не поддерживается')
  })
}

export { rangeSlider, testWebP }
