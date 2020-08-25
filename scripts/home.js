const buttonMenu = document.querySelector("#button")
const menu = window.document.querySelector('aside')
const contact = window.document.querySelector('#link-contact')
var count = 0
console.log(pageYOffset)
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
        menu.style.transition='0.5s'
    }
    else{
        menu.style.display = 'none'
        buttonMenu.setAttribute('src', 'assets/menu-button.svg')
        menu.style.transition='0.5s'
    }
})