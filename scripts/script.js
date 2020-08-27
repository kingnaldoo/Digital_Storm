const buttonMenu = document.querySelector("#button")
const menu = window.document.querySelector('aside')
const contact = window.document.querySelector('#link-contact')
const buttonAction = window.document.querySelector('#button-action')
const header = document.querySelector('header')
const mobileMenu = document.querySelector('#link-contact a')
var count = 0


contact.addEventListener('click', function contact_scroll(){
    count+=1
    menu.style.display='none'
    buttonMenu.setAttribute('src', 'assets/menu-button.svg')
})

buttonMenu.addEventListener('click', function menuAction(){
    count+=1
    if(count%2!=0){ 
        menu.style.display='block'
        buttonMenu.setAttribute('src', 'assets/x.svg')
    }
    else{
        menu.style.display = 'none'
        buttonMenu.setAttribute('src', 'assets/menu-button.svg')
    }
})

window.document.addEventListener('scroll', function rolagem(){
    
    if(pageYOffset!=0){
        header.style.borderBottom = 'solid 1px white'
    }
    else{
        header.style.borderBottom = 'none'
    }

    if(pageYOffset>=480){
        mobileMenu.style.display = 'block'
    }
    else{
        mobileMenu.style.display = 'none'
    }
})

