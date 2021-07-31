let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let leftnav = document.querySelector('.leftnav');
let rightnav = document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    leftnav.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})