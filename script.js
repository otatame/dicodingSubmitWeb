const navbar = document.getElementById('nav');
const hamburg = document.getElementById('hamburger');
const menu = document.getElementById('menu');

window.addEventListener("scroll", ()=>{
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

hamburg.addEventListener('click', ()=>{
    menu.classList.toggle('displays')
    hamburg.classList.toggle('isActive')
})