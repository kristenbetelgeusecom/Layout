let clickMenu = document.querySelector('.clickMenu')
let closeMenu = document.querySelector('.closeMenuVertical')
let clickServices = document.querySelector('.select_img')
let moreServices = document.querySelector('.moreServices')
let body = document.querySelector('body')

let openreview1 = document.querySelector('.openReview1')
let review1 = document.querySelector('.review1')
let isOpenReview1 = false
let isOpenReview2 = false
let isOpenReview3 = false

let openreview2 = document.querySelector('.openReview2')
let review2 = document.querySelector('.review2')

let openreview3 = document.querySelector('.openReview3')
let review3 = document.querySelector('.review3')

clickMenu.addEventListener('click', function () {
  menuVertical.style.display = 'block'
  body.classList.add('lock')
})

closeMenu.addEventListener('click', function () {
  menuVertical.style.display = 'none'
  body.classList.remove('lock')
})

clickServices.addEventListener('click', function () {
  moreServices.classList.toggle('hidden')
})

openreview1.addEventListener('click', function () {
  if (isOpenReview1 == false) {
    review1.style.display = 'block'
    openreview1.innerHTML = 'Свернуть отзыв'
    isOpenReview1 = true
  } else {
    review1.style.display = 'none'
    openreview1.innerHTML = 'Читать полностью'
    isOpenReview1 = false
  }
})

openreview2.addEventListener('click', function () {
  if (isOpenReview2 == false) {
    review2.style.display = 'block'
    openreview2.innerHTML = 'Свернуть отзыв'
    isOpenReview2 = true
  } else {
    review2.style.display = 'none'
    openreview2.innerHTML = 'Читать полностью'
    isOpenReview2 = false
  }
})

openreview3.addEventListener('click', function () {
  if (isOpenReview3 == false) {
    review3.style.display = 'block'
    openreview3.innerHTML = 'Свернуть отзыв'
    isOpenReview3 = true
  } else {
    review3.style.display = 'none'
    openreview3.innerHTML = 'Читать полностью'
    isOpenReview3 = false
  }
})