// Menu Responsivo 
const btnMobile = document.getElementById('btn-mobile');

function ToggleMenu(event){
    if (event.type ==='touchstart')event.preventDefault();
    const nav = document.getElementById('nav');
    const slide = document.getElementById('wrapper');
    nav.classList.toggle('active');
    slide.classList.toggle('active');

    
}; 

btnMobile.addEventListener('click', ToggleMenu);
btnMobile.addEventListener('touchstart', ToggleMenu);
