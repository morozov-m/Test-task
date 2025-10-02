const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const headerLine = document.querySelector('.header-line')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    headerLine.classList.toggle('active');
})