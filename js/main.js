// custom main js file build by JeanDoe

const body = document.body;
const themeBtn = document.getElementById('theme-btn');
const navbar = document.querySelector('.header .navbar');
const menuBtn = document.getElementById('menu-btn');

if(themeBtn){
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
    })
}

if(menuBtn){
    menuBtn.addEventListener('click', () =>{
        navbar.classList.toggle('active');
    })
}