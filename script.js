const hamburger=document.getElementsByClassName('nav-hamburger')[0];
const mobilenav=document.getElementsByClassName('mobile-nav')[0]
const mobilenavItems=document.querySelector('.mobile-nav ul')

console.log(mobilenavItems);
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('nav-hamburger-active');
    mobilenav.classList.toggle('none');
    console.log('clicked');
})
mobilenav.addEventListener('click',()=>{
    mobilenav.classList.toggle('none');
    hamburger.classList.toggle('nav-hamburger-active');
})
mobilenavItems.addEventListener('click',(e)=>{
    e.stopPropagation()
})