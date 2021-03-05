$(function(){

    $('header').load('inc.html header',init);
    $('footer').load('inc.html footer');

    function init(){
        $('nav a').on('click',function(){
            localStorage.pageNum = $(this).index();
        });
        $('nav a').eq(localStorage.pageNum).css({ color:'#f00' })
    }
});