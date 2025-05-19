const btnOpen  = document.querySelector('.button-open')
const btnClose = document.querySelector('.button-close')
const menu     = document.getElementById('menu')

// Ao clicar em "open"
btnOpen.addEventListener('click', () => {
    menu.classList.remove('w-0')
    menu.classList.add('w-48')     // 12rem ≈ 11.5rem desejado

    btnOpen.classList.add('hidden')
    btnClose.classList.remove('hidden')
})

// Ao clicar em "close"
btnClose.addEventListener('click', () => {
    menu.classList.add('w-0')
    menu.classList.remove('w-48')

    btnClose.classList.add('hidden')
    btnOpen.classList.remove('hidden')
})