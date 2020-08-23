const header = document.querySelector('header')
const mobileMenu = document.querySelector('#link-contact a')

window.document.addEventListener('scroll', function rolagem(){
    
    if(pageYOffset!=0){
        header.style.borderBottom = 'solid 1px white'
        console.log(pageYOffset)
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

    if(pageXOffset!=0){
        pageXOffset=0
    }
})


