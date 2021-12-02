let clickMenu = document.querySelector('.clickMenu')
let closeMenu = document.querySelector('.closeMenuVertical')
let clickServices = document.querySelector('.select_img')
let moreServices = document.querySelector('.moreServices')
let body = document.querySelector('body')

let openreview1 = document.querySelector('.openReview1')
let review1 = document.querySelector('.review1')

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
  review1.style.display = 'block'
  openreview1.innerHTML = 'Свернуть отзыв'
})
openreview2.addEventListener('click', function () {
  review2.style.display = 'block'
  openreview2.innerHTML = 'Свернуть отзыв'
})
openreview3.addEventListener('click', function () {
  review3.style.display = 'block'
  openreview3.innerHTML = 'Свернуть отзыв'
})




