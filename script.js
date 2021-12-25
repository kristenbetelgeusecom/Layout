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

let time = 18000 * 300;
const countDownElement = document.querySelector('.forms-time')
let hiddenMobile = document.querySelector('.hidden-mobile span')
let border = document.querySelector('.forms__white-border')

setInterval(updateCountdown, 1000);

function updateCountdown() {
  if (time > 0) {
    let hours = Math.floor(time / (60 * 60000));
    let minutes = Math.floor(((time - (hours * 3600000)) / 60000) % 60);
    let seconds = Math.floor((time - ((hours * 3600000) + (minutes * 60000))) / 1000);
    hours = hours < 10 ? "0" + hours : hours;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    time = time - 1000;
  }
  else {
    countDownElement.innerHTML = 'Скидка больше не действует';
    countDownElement.style.fontSize = '2rem'
    countDownElement.style.textAlign = 'center'
    hiddenMobile.style.display = 'none'
    border.style.width = '11rem'
  }
}

const send = document.querySelector('.send')
const namee = document.querySelector('.name')
const phone = document.querySelector('.phone')
const form = document.querySelector('form');
console.log(document)

send.addEventListener('click', function (e) {
  e.preventDefault();
  if (namee.value === '' && phone.value === '') {
    namee.classList.add('error')
    phone.classList.add('error')
  }
  if (namee.value !== '' && phone.value !== '') {
    namee.classList.remove('error');
    phone.classList.remove('error');
  }
})

const addCity = document.querySelector('.add-city')
const cities = document.querySelector('.cities')

addCity.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (addCity.value) {
      const p = document.createElement("option");
      p.innerHTML = addCity.value;
      cities.appendChild(p);
    }
  }
});
addCity.value !== ""



var slideIndex = 1;
showSlides(slideIndex)

function plusSlide() {
  slideIndex = slideIndex + 1;
  showSlides(slideIndex);
}

function minusSlide() {
  slideIndex = slideIndex - 1;
  showSlides(slideIndex);
}

function curentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementsByClassName('item');
  var dots = document.getElementsByClassName('slider-dots_item')

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

