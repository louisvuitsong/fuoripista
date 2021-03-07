$(function(){

/* var delta, loop, num=0, pos=[];

$('.main-cover article').each(function(i){
    pos.push($('.main-cover article').eq(i).offset().top);
});
$('.main-cover').on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
    
    clearTimeout(loop);
    loop = setTimeout(function(){
        if(delta < 0){
            //down
           if(num != 4) num++;
        }else{
            //up
           if(num != 0) num--;
        }
        $('main .main-cover').animate({marginTop:-pos[num]});
    },200);
}); */

    var mPos = {start:0, end:0};
    var slideNum = 0;
    $('.slide .slide-list').draggable({
        axis:'x',
        start:function(e){
            mPos.start = e.pageX;
        },
        drag:function(){},
        stop:function(e){
            
            mPos.end = e.pageX;
            dragAni();
        }
    });

    function dragAni(){
        if(mPos.start > mPos.end){
            //우측에서 좌측
            slideNum--;
        }else{
            //좌측에서 우측
            slideNum++;
        }
        $('.slide .slide-list').animate({
            left: slideNum * 25 + '%'
        });
        $('.slide-list li').removeClass('active');
        $('.slide-list li').eq(Math.abs(slideNum)).addClass('active');
        console.log(Math.abs(slideNum));
    };





});