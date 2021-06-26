let navbar = document.getElementById('nav');

window.addEventListener("scroll", ()=>{
    navbar.classList.toggle('sticky', window.scrollY > 0);
});