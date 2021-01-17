// hamburger menu function
const body = document.querySelector('body')
const menuBtn = document.querySelector('.btn-hamburger')
const nav = document.querySelector('.modal')

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
  if(nav.classList.contains('active')){
    body.style.overflow = 'hidden'
  }else {
    body.style.overflow = 'auto'
  }
})
