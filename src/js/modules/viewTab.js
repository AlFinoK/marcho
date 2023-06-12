const viewFilter = () => {
  const viewBtn = document.querySelectorAll('.shop__content-btn')
  const buttonList = document.querySelector('.button-list')
  const productItems = document.querySelectorAll('.product-item')

  viewBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
      removeActiveClass()
      button.classList.add('shop__content-btn--active')

      if (button === buttonList) {
        productItems.forEach((item) => {
          item.classList.add('product-item--list')
        })
      } else {
        productItems.forEach((item) => {
          item.classList.remove('product-item--list')
        })
      }
    })

    if (index === 0) {
      button.click()
    }
  })

  function removeActiveClass() {
    viewBtn.forEach((button) => {
      button.classList.remove('shop__content-btn--active')
    })
  }
}

viewFilter()

export { viewFilter }
