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

const items = document.querySelectorAll('#hero-heading .slide');

let index = 1;
setInterval(() => {
    items.forEach((item) => {
        item.style.transform = `translateX(-${index}00%)`;
    })

    index++;

    if(items[length].style.transform === 'translateX(-300%)') {
        items.forEach((item) => {
            item.style.transform = 'translateX(0)';
        })
    }
}, 2000)
