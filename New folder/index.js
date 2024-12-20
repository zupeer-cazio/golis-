const sideMenu=document.querySelector('aside');
const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close');

const themeToggler=document.querySelector('.theme-toogler');
menuBtn.addEventListener('click',function(){
  sideMenu.style.display='block';
})
closeBtn.addEventListener('click',function(){
  sideMenu.style.display='none';
})

themeToggler.addEventListener('click',function(){
  document.body.classList.toggle('dark-theme-variable');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('.active')
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('.active')
})