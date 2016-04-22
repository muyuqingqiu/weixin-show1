$(function(){
var $li = $('#content li');
var downY = 0;
var nowIndex = 0;
var prevornextIndex = 0;
var onoff = true;
switchPage();

$('#main').css('marginLeft',-viewW/2);
var animatArr = [
    {
        show : function(){
            $li.eq(0).find('.title').css('top',40)
        },
        hidden : function() {
            $li.eq(0).find('.title').css('transition','0s').css('top','');
            setTimeout(function() {
                $li.eq(0).find('.title').css('transition','');
            },20)
        }
    }

];



animatArr[nowIndex].show();
function switchPage() {
    if (onoff) {
        onoff = false;
        $li.each(function(i,elem) {
            var elem = $(elem);
            elem.on('touchstart',fnStart);
        })
    }
    function fnStart(ev) {
        var touch = ev.originalEvent.changedTouches[0];
        downY = touch.pageY;
        nowIndex = $(this).index();

        $(this).on('touchend',fnEnd);
    }
    function fnEnd(ev) {
        var touch = ev.originalEvent.changedTouches[0];
        if(touch.pageY < downY){
            $li.each(function(i,elem) {
                var elem = $(elem);
                elem.removeClass('active');
            })
            prevornextIndex = nowIndex == $li.length - 1 ? 0 : nowIndex + 1;
            $li.eq(prevornextIndex).addClass('active');
        }
        else  if(touch.pageY > downY){
            $li.each(function(i,elem) {
                var elem = $(elem);
                elem.removeClass('active');
            })
            prevornextIndex = nowIndex == 0 ? $li.length - 1 : nowIndex - 1;
            $li.eq(prevornextIndex).addClass('active');
        }
    }
}



})
