// Menu Responsivo 
const btnMobile = document.getElementById('btn-mobile');

function ToggleMenu(event){
    if (event.type ==='touchstart')event.preventDefault();
    nav.classList.toggle('active');
    slide.classList.toggle('active');

    
}; 

btnMobile.addEventListener('click', ToggleMenu);
btnMobile.addEventListener('touchstart', ToggleMenu);

//Sombra na Nav

var nav = document.getElementById('nav')
addEventListener('scroll', function(){
    if(window.screenY > 170){
        nav.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.3)'
    }else{
        nav.style.boxShadow = 'none'
    }
})
