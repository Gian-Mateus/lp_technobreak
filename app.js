const btnOpen  = document.querySelector('.button-open');
const btnClose = document.querySelector('.button-close');
const menu     = document.getElementById('menu');

// Ao clicar em "open"
btnOpen.addEventListener('click', () => {
      menu.classList.remove('w-0');
      menu.classList.add('w-48');     // 12rem ≈ 11.5rem desejado

      btnOpen.classList.add('hidden');
      btnClose.classList.remove('hidden');
})

// Ao clicar em "close"
btnClose.addEventListener('click', () => {
      menu.classList.add('w-0');
      menu.classList.remove('w-48');

      btnClose.classList.add('hidden');
      btnOpen.classList.remove('hidden');
})

// Carousel

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.slides-container')
  const slides = Array.from(document.querySelectorAll('.slide'))
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const indicators = document.querySelector('.indicators')

  // clona primeiro e último
  const firstClone = slides[0].cloneNode(true)
  const lastClone = slides[slides.length - 1].cloneNode(true)
  firstClone.id = 'first-clone'
  lastClone.id = 'last-clone'
  container.append(firstClone)
  container.prepend(lastClone)

  // recalc slides
  const allSlides = Array.from(container.querySelectorAll('.slide'))
  let index = 1
  const slideWidth = allSlides[index].clientWidth

  // posiciona no slide real 1
  container.style.transform = `translateX(${-slideWidth * index}px)`

  // monta indicadores
  slides.forEach((_, i) => {
    const dot = document.createElement('span')
    dot.className = 'dot h-3 w-3 rounded-full bg-gray-500/70 cursor-pointer'
    if (i === 0) dot.classList.replace('bg-gray-500/70', 'bg-white')
    dot.addEventListener('click', () => goTo(i + 1))
    indicators.append(dot)
  })
  const dots = Array.from(document.querySelectorAll('.dot'))

  function updateDots() {
    dots.forEach(d => d.className = 'dot h-3 w-3 rounded-full bg-gray-500/70')
    const active = dots[index - 1]
    if (active) active.className = 'dot h-3 w-3 rounded-full bg-white'
  }

  function goTo(i) {
    index = i
    container.style.transition = 'transform 0.6s ease'
    container.style.transform = `translateX(${-slideWidth * index}px)`
    updateDots()
  }

  nextBtn.addEventListener('click', () => goTo(index + 1))
  prevBtn.addEventListener('click', () => goTo(index - 1))

  container.addEventListener('transitionend', () => {
    const current = allSlides[index]
    if (current.id === 'first-clone') {
      container.style.transition = 'none'
      index = 1
      container.style.transform = `translateX(${-slideWidth * index}px)`
    }
    if (current.id === 'last-clone') {
      container.style.transition = 'none'
      index = allSlides.length - 2
      container.style.transform = `translateX(${-slideWidth * index}px)`
    }
  })

  // autoplay
  let autoplayId = startAutoplay()
  function startAutoplay() {
    return setInterval(() => nextBtn.click(), 3000)
  }
  container.addEventListener('mouseenter', () => clearInterval(autoplayId))
  container.addEventListener('mouseleave', () => (autoplayId = startAutoplay()))
})
