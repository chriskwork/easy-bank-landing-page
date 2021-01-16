// hamburger menu function

const menuBtn = document.querySelector('#menuBtn')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
  if(menuBtn.classList.contains('open')){
    menuBtn.classList.remove('open')
    overlay.style.opacity = '0'
    overlay.style.visibility = 'hidden'
    body.style.overflow = 'auto'
  } else{
    menuBtn.classList.add('open')
    overlay.style.opacity = '1'
    overlay.style.visibility = 'visible'
    body.style.overflow = 'hidden'
  }
})