let slideIndex = 1
let currentImageIndex = 0
let images = []

document.addEventListener('DOMContentLoaded', function () {
  images = document.querySelectorAll('.gallery-item img')

  images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(img.src, index))
  })

  const timelineItems = document.querySelectorAll('.timeline-item')

  function revealTimelineItems() {
    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show')
      }, index * 500)
    })
  }
  revealTimelineItems()

  document.querySelector('.prev').addEventListener('click', function (event) {
    event.stopPropagation()
    changeImage(-1)
  })

  document.querySelector('.next').addEventListener('click', function (event) {
    event.stopPropagation()
    changeImage(1)
  })

  showSlides(slideIndex)
})

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  const slides = document.getElementsByClassName('slide')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
}

function openModal(src, index) {
  currentImageIndex = index
  document.getElementById('modal').style.display = 'block'
  document.getElementById('modal-img').src = src
}

function closeModal() {
  document.getElementById('modal').style.display = 'none'
}

function changeImage(direction) {
  currentImageIndex += direction

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1
  }

  document.getElementById('modal-img').src = images[currentImageIndex].src
}
