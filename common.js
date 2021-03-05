$(function(){

    $('header').load('inc.html header',init);
    $('footer').load('inc.html footer');

    function init(){
        // $('nav a').on('click',function(){
        //     localStorage.pageNum = $(this).index();
        // });
        // $('nav a').eq(localStorage.pageNum).css({ color:'#f00' });

        var toggleBtn = document.querySelector('.menu-btn');
        var toggleMenu = document.querySelector('.menu-nav');
        var toggleTrigger = document.querySelector('.menu-trigger');

        toggleBtn.addEventListener('click',function(){
        toggleMenu.classList.toggle('active');
        toggleTrigger.classList.toggle('active');
    });
    }

    
});