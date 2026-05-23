let menuHamburger = document.querySelector(".menu-hamburger"),
    firstBar = document.querySelector(".first-bar"),
    secondBar = document.querySelector(".second-bar"),
    navBar = document.querySelector('.nav-bar');
menuHamburger.addEventListener("click", ()=>{
    firstBar.classList.toggle('firstBar')
    secondBar.classList.toggle('secondBar')
    menuHamburger.classList.toggle('menuhambuger')
    navBar.classList.toggle('navBar')
})
document.addEventListener("click", ()=>{
    if(!navBar){
        firstBar.classList.remove('firstBar')
        secondBar.classList.remove('secondBar')
        menuHamburger.classList.remove('menuhambuger')
        navBar.classList.remove('navBar')
    }
})