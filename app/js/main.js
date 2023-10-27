'use strict'

new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
})

const popupLinks = document.querySelectorAll('.popup-link')
const lockPadding = document.querySelectorAll('.lock-padding')
const body = document.querySelector('body')

let unlock = true

const timeout = 300

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index]
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '')
      const currentPopup = document.getElementById(popupName)
      popupOpen(currentPopup)
      e.preventDefault()
    })
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index]
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'))
      e.preventDefault()
    })
  }
}

function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open')
    if (popupActive) {
      popupClose(popupActive, false)
    } else {
      bodyLock()
    }
    currentPopup.classList.add('open')
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'))
      }
    })
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open')
    if (doUnlock) {
      bodyUnLock()
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('body').offsetWidth + 'px'

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index]
      el.style.paddingRight = lockPaddingValue
    }
  }
  body.style.paddingRight = lockPaddingValue
  body.classList.add('lock')

  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = '0px'
      }
    }
    body.style.paddingRight = '0px'
    body.classList.remove('lock')
  }, timeout)

  unlock = false
  setTimeout(function () {
    unlock = true
  }, timeout)
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open')
    popupClose(popupActive)
  }
})
// ----------------------------------------------------------------------

const ratings = document.querySelectorAll('.rating')
if (ratings.length > 0) {
  initRatings()
}

// Main function
function initRatings() {
  let ratingActive, ratingValue
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index]
    initRating(rating)
  }

  // инициализация конкретного рейтинга
  function initRating(rating) {
    initRatingVars(rating)

    setRatingActiveWidth()

    if (rating.classList.contains('rating--set')) {
      setRating(rating)
    }
  }

  // инициализация переменных
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active')
    ratingValue = rating.querySelector('.rating__value')
  }

  // изменение ширины активных звезд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
  }

  // возможность указать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item')
    // for (let index = 0; index < ratingItems.length; index++) {
    //   const ratingItem = ratingItems[index]
    //   ratingItem.addEventListener('mouseenter', function (e) {
    //     обновление переменных
    //     initRatingVars(rating)
    //     обновление активных звезд
    //     setRatingActiveWidth(ratingItem.value)
    //   })
    //   ratingItem.addEventListener('mouseleave', function (e) {
    //     // обнуление активных звезд
    //     setRatingActiveWidth()
    //   })
    //   ratingItem.addEventListener('click', function (e) {
    //     //обнуление пременных
    //     initRatingVars(rating)

    //     if (rating.dataset.ajax) {
    //       // отправить на сервер
    //       setRatingValue(ratingItem.value, rating)
    //     } else {
    //       // отобразить указанную оценку
    //       ratingValue.innerHTML = index + 1
    //       setRatingActiveWidth()
    //     }
    //   })
    // }
  }
}

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date())
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date())
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  }
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id)
  const daysSpan = clock.querySelector('.days')
  const hoursSpan = clock.querySelector('.hours')
  const minutesSpan = clock.querySelector('.minutes')
  const secondsSpan = clock.querySelector('.seconds')

  function updateClock() {
    const t = getTimeRemaining(endtime)

    daysSpan.innerHTML = t.days
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  const timeinterval = setInterval(updateClock, 1000)
}

const deadline = '2023-04-04'
initializeClock('clock', deadline)
