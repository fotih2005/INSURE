const elnav = document.querySelector('.site-header-nav')
const elnavbtn = document.querySelector('.site-header__wrraper-btn')

elnavbtn.addEventListener('click' , () =>{
    elnav.classList.toggle('site-header-nav--open')
    elnavbtn.classList.toggle('site-header__wrraper-btn--open')
})
