
$(document).ready(function(){  
    alert('이 페이지는 취업 지원을 위한 비상업적 포트폴리오 용도로 사용됨을 알려드립니다.');

    preventDefaultAnchor();

    $('body').addClass('active'); 

    $('.menu_btn').on('click',function() {
        if($('body').hasClass('open')){
            $('body').removeClass('open');
        }else{
            $('body').addClass('open');
        }
    });
});	

$(window).on('scroll resize', function() {
    scrollEvent_Tit('#main .scroll_event');    
    scrollEvent_Ingredients('#main .indi_event');    
});

function scrollEvent_Tit(selector) {
      
    $(selector).each(function() {
        var $selector = $(this);
        var start = $selector.offset().top - $(window).innerHeight();
        var end = $selector.offset().top + $selector.innerHeight();
        var scrollAmt = $(document).scrollTop();        
        
        if (scrollAmt < start) {            
            $selector.parents('.sect').removeClass('on');
        } else if (scrollAmt > end) {
            $selector.parents('.sect').removeClass('on');
        } else {
            if( $selector.parents('.sect').hasClass('on') === false) {
                $selector.parents('.sect').removeClass('on');
            }
            $selector.parents('.sect').addClass('on');
        }  
    });     
}

function scrollEvent_Ingredients(selector) {
      
    $(selector).each(function() {
        var $selector = $(this);
        var start = $selector.offset().top - $(window).innerHeight();
        var end = $selector.offset().top + $selector.innerHeight();
        var scrollAmt = $(document).scrollTop();        
        
        if (scrollAmt < start) {            
            $selector.removeClass('on');
        } else if (scrollAmt > end) {
            $selector.removeClass('on');
        } else {
            if( $selector.hasClass('on') === false) {
                $selector.removeClass('on');
            }            
            $selector.addClass('on');
        }  
    });     
}

function preventDefaultAnchor() {
    $(document).on('click', 'a[href="#"]', function(e) {
      e.preventDefault();
    });
}

window.addEventListener("beforeunload", function () {    
    $(document).scrollTop(0);      			
}); 	















    
    
