$(function(){
var $li = $('#content li');
var downY = 0;
var nowIndex = 0;
var prevornextIndex = 0;
var onoff = true;
$('.arrow').css('transform','scale('+(1/scale)+')');
$('.arrow').css('-webkit-transform','scale('+(1/scale)+')');
switchPage();
$(document).on('touchmove',function(ev) {
    ev.preventDefault();
})
$('#main').css('marginLeft',-viewW/2);
var animatArr = [
    {                                                   //0
        show : function(){
            $li.eq(0).find('.title').css('top',50);
            $li.eq(0).find('.main-image .text0').addClass('show');
        },
        hidden : function() {
            $li.eq(0).find('.title').css('transition','0s').css('top','');
            $li.eq(0).find('.main-image .text0').removeClass('show');
            setTimeout(function() {
                $li.eq(0).find('.title').css('transition','');
            },20)
        }
    },
    {                                                               //1
        show : function(){
            $li.eq(1).find('.title').css('top',50);
            $li.eq(1).find('.main-img').css('top',0);
            $li.eq(1).find('.text3').css('top',500).css('opacity',1);
            $li.eq(1).find('.text2').css('top',180).css('opacity',1);
            $li.eq(1).find('.text1').css('top',350).css('opacity',1);
        },
        hidden : function() {
            $li.eq(1).find('.title').css('transition','0s').css('top','');
            $li.eq(1).find('.main-img').css('transition','0s').css('top','');
            $li.eq(1).find('.text3').css('transition','0s').css('top','').css('opacity','');
            $li.eq(1).find('.text2').css('transition','0s').css('top','').css('opacity','');
            $li.eq(1).find('.text1').css('transition','0s').css('top','').css('opacity','');
            setTimeout(function() {
                $li.eq(1).find('.title,.main-img,.text3,.text2,.text1').css('transition','');
            },20)
        }
    },
    {                                                  //2
        show : function(){
            $li.eq(2).find('.title').css('top',50);
            $li.eq(2).find('.image0').css('opacity',1).css('transform','rotate(360deg)').css('left',20);
            $li.eq(2).find('.image1').css('opacity',1).css('transform','rotate(360deg)').css('left',100);
            $li.eq(2).find('.image2').css('opacity',1).css('transform','rotate(360deg)').css('left',210);
            $li.eq(2).find('.image3').css('opacity',1).css('transform','rotate(360deg)').css('left',270);
            $li.eq(2).find('.image4').css('opacity',1).css('transform','rotate(360deg)').css('left',320);
            $li.eq(2).find('.image5').css('opacity',1).css('transform','rotate(360deg)').css('left',400);
        },
        hidden : function() {
            $li.eq(2).find('.title').css('transition','0s').css('top','');
            $li.eq(2).find('.texts img').each(function(i,elem) {
                var elem = $(elem);
                elem.css('transition','0s').css({
                    left : '',
                    opacity : 0,
                    transform : ''
                })
            })
            setTimeout(function() {
                $li.eq(2).find('.title').css('transition','');
                $li.eq(2).find('.texts img').each(function(i,elem) {
                    var elem = $(elem);
                    elem.css('transition','')
                })
            },20)
        }
    },
    {                                                       //3
        show : function(){
            $li.eq(3).find('.title').css('top',50);
            $li.eq(3).find('.main-image').css('transform','rotate(360deg)').css('opacity',1);
        },
        hidden : function() {
            $li.eq(3).find('.title').css('transition','0s').css('top','');
            $li.eq(3).find('.main-image').css('transition','0s').css('transform','').css('opacity','');
            setTimeout(function() {
                $li.eq(3).find('.title,.main-image').css('transition','');
            },20)
        }
    },
    {                                                       //4
        show : function(){
            $li.eq(4).find('.title').css('top',50);
            $li.eq(4).find('.image0').css('opacity',1).css('top',280);
            $li.eq(4).find('.image1').css('opacity',1).css('top',280);
            $li.eq(4).find('.image2').css('opacity',1).css('top',590);
            $li.eq(4).find('.image3').css('opacity',1).css('top',740);
            $li.eq(4).find('.image4').css('opacity',1).css('top',780);
        },
        hidden : function() {
            $li.eq(4).find('.title').css('transition','0s').css('top','');
            $li.eq(4).find('.texts img').each(function(i,elem) {
                var elem = $(elem);
                elem.css('transition','0s').css({
                    top : '',
                    opacity : 0
                })
            })
            setTimeout(function() {
                $li.eq(4).find('.title').css('transition','');
                $li.eq(4).find('.texts img').each(function(i,elem) {
                    var elem = $(elem);
                    elem.css('transition','')
                })
            },20)
        }
    },
    {                                       //5
        show : function() {
            $li.eq(5).find('.title').css('top',50);
            $li.eq(5).find('.main-image').addClass('show');
        },
        hidden : function() {
            $li.eq(5).find('.title').css('transition','0s').css('top','');
            $li.eq(5).find('.main-image').removeClass('show');
            setTimeout(function() {
                $li.eq(5).find('.title').css('transition','')
            },20)
        }
    },
    {                                       //6
        show : function() {
            $li.eq(6).find('.title').css('top',50);
            $li.eq(6).find('.main-image .image0').css('top',258).css('opacity',1);
            $li.eq(6).find('.main-image .image1').css('top',320).css('opacity',1);
            $li.eq(6).find('.main-image .image2').css('top',433).css('opacity',1);
        },
        hidden : function() {
            $li.eq(6).find('.title').css('transition','0s').css('top','');
            $li.eq(6).find('.main-image .image0').css('transition','0s').css('top','').css('opacity',0);
            $li.eq(6).find('.main-image .image1').css('transition','0s').css('top','').css('opacity',0);
            $li.eq(6).find('.main-image .image2').css('transition','0s').css('top','').css('opacity',0);
            setTimeout(function(){
                $li.eq(6).find('.title').css('transition','')
                $li.eq(6).find('.main-image img').each(function(i,elem) {
                    var elem = $(elem);
                    elem.css('transition','')
                })
            },20)
        }
    },
    {                                       //7
        show : function() {
            $li.eq(7).find('.title').css('top',50);
            $li.eq(7).find('.main-image .image0').css('top',0).css('opacity',1);
            $li.eq(7).find('.main-image .image1').css('top',0).css('opacity',1);
            $li.eq(7).find('.main-image .image2').css('bottom',10).css('opacity',1);
        },
        hidden : function() {
            $li.eq(7).find('.title').css('transition','0s').css('top','');
            $li.eq(7).find('.main-image .image0').css('transition','0s').css('top','').css('opacity',0);
            $li.eq(7).find('.main-image .image1').css('transition','0s').css('top','').css('opacity',0);
            $li.eq(7).find('.main-image .image2').css('transition','0s').css('bottom','').css('opacity',0);
            setTimeout(function(){
                $li.eq(7).find('.title').css('transition','')
                $li.eq(7).find('.main-image img').each(function(i,elem) {
                    var elem = $(elem);
                    elem.css('transition','')
                })
            },20)
        }
    },
    {                                       //8
        show : function() {
            $li.eq(8).find('.title').css('top',50);
            $li.eq(8).find('.texts img').each(function(i,elem) {
                var elem = $(elem);
                elem.addClass('show');
                elem.css('animationDelay',i*0.2 + 's')
            })
        },
        hidden : function() {
            $li.eq(8).find('.title').css('transition','0s').css('top','');
            $li.eq(8).find('.texts img').each(function(i,elem) {
                var elem = $(elem);
                elem.removeClass('show');
            })
            setTimeout(function(){
                $li.eq(8).find('.title').css('transition','')
            },20)
        }
    },
    {                                       //9
        show : function() {
            $li.eq(9).find('.title').css('top',50);
            $li.eq(9).find('.main-image .image0').css('top',276).css('opacity',1);
            $li.eq(9).find('.main-image img').each(function(i,elem) {
                var elem = $(elem);
                if(i!=0){
                    elem.addClass('show'+i);
                };
            })
        },
        hidden : function() {
            $li.eq(9).find('.title').css('transition','0s').css('top','');
            $li.eq(9).find('.main-image .image0').css('transition','0s').css('top','').css('opacity',0);
            $li.eq(9).find('.main-image img').each(function(i,elem) {
                var elem = $(elem);
                if(i!=0){
                    elem.removeClass('show'+i);
                };
            })
            setTimeout(function(){
                $li.eq(9).find('.title').css('transition','');
                $li.eq(9).find('.main-image .image0').css('transition','');
            },20)
        }
    },
    {                                       //10
        show : function() {
            $li.eq(10).find('.title').css('top',50);
            $li.eq(10).find('.main-image img').each(function(i,elem) {
                var elem = $(elem);
                elem.css('bottom',0);
            })
            $li.eq(10).find('.texts img').each(function(i,elem) {
                var elem = $(elem);
                elem.addClass('show')
                elem.css('animationDelay',1+i*0.3+'s')
            })
        },
        hidden : function() {
            $li.eq(10).find('.title').css('transition','0s').css('top','');
            $li.eq(10).find('.main-image img').each(function(i,elem) {
                var elem = $(elem);
                elem.css('transition','0s').css('bottom','');
            })
            $li.eq(10).find('.texts img').each(function(i,elem) {
                var elem = $(elem);
                elem.removeClass('show');
            })
            setTimeout(function(){
                $li.eq(10).find('.title').css('transition','');
                $li.eq(10).find('.main-image img').each(function(i,elem) {
                    var elem = $(elem);
                    elem.css('transition','');
                })
            },20)
        }
    }
];
animatArr[0].show();

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
        if(touch.pageY < downY){   //上

            $li.each(function(i,elem) {
                var elem = $(elem);
                elem.removeClass('active');
            })
            prevornextIndex = nowIndex == $li.length - 1 ? 0 : nowIndex + 1;
            $li.eq(prevornextIndex).addClass('active');
            animatArr[nowIndex].hidden();
            animatArr[prevornextIndex].show();
        }
        else  if(touch.pageY > downY){ //下
            $li.each(function(i,elem) {
                var elem = $(elem);
                elem.removeClass('active');
            })
            prevornextIndex = nowIndex == 0 ? $li.length - 1 : nowIndex - 1;
            $li.eq(prevornextIndex).addClass('active');
            animatArr[nowIndex].hidden();
            animatArr[prevornextIndex].show();
        }
    }
    $(this).off('touchend',fnEnd);
}


})
