
$(function(){

    var toggleBtn = document.querySelector('.menu-btn');
    var toggleMenu = document.querySelector('.menu-nav');
    var toggleTrigger = document.querySelector('.menu-trigger');

    toggleBtn.addEventListener('click',function(){
        toggleMenu.classList.toggle('active');
        toggleTrigger.classList.toggle('active');
    });

});






