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

//const carousel = document.getElementById('hero-heading');
const items = document.querySelectorAll('#hero-heading .slide');
// items[index].classList.add('active-slide');

// setInterval(() => {
    //     items[index].classList.remove('active-slide');
    //     index = (index + 1) % items.length
    //     items[index].classList.add('active-slide')
    // }, 3000)

let index = 0;
setInterval(() => {
    items.forEach((item) => {
        item.style.transform = `translateX(-${index}00%)`;
    })

    if (index === items.length - 1) {
        index = 0;
    } else{
        index++;
    }
}, 2000)