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
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index]
      ratingItem.addEventListener('mouseenter', function (e) {
        // обновление переменных
        initRatingVars(rating)
        // обновление активных звезд
        setRatingActiveWidth(ratingItem.value)
      })
      ratingItem.addEventListener('mouseleave', function (e) {
        // обнуление активных звезд
        setRatingActiveWidth()
      })
      ratingItem.addEventListener('click', function (e) {
        //обнуление пременных
        initRatingVars(rating)
        if (rating.dataset.ajax) {
          // отправить на сервер
          setRatingValue(ratingItem.value, rating)
        } else {
          // отобразить указанную оценку
          ratingValue.innerHTML = index + 1
          setRatingActiveWidth()
        }
      })
    }
  }
}

export { initRatings }
