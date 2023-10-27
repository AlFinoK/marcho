const viewFilterTab = () => {
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

const descriptionTab = () => {
  const tabsBtn = document.querySelectorAll('.goods-tabs__nav-btn')
  const tabsItems = document.querySelectorAll('.goods-tabs__item')

  tabsBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item
      let tabId = currentBtn.getAttribute('data-product-tab')
      let currentTab = document.querySelector(tabId)

      if (!currentBtn.classList.contains('goods-tabs__nav-btn--active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('goods-tabs__nav-btn--active')
        })

        tabsItems.forEach(function (item) {
          item.classList.remove('goods-tabs__item--active')
        })

        currentBtn.classList.add('goods-tabs__nav-btn--active')
        currentTab.classList.add('goods-tabs__item--active')
      }
    })
    document.querySelector('.goods-tabs__nav-btn:nth-child(3)').click()
    document.querySelector('.goods-tabs__item:nth-child(3)').click()
  })
}

export { viewFilterTab, descriptionTab }
