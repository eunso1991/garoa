$(document).ready(function(){
    setTimeout(function(){
        $('.home_header').addClass('on');
    }, 2500);
    
    scrollEvent_Pos1();
    scrollEvent_Pos2();
    //scrollEvent_Pos3(); 
    scrollEvent_Pos5();
    scrollEvent_Ingredients('#main .indi_event');
});

$(window).on('scroll resize', function() {          
    scrollEvent_Pos1();
    scrollEvent_Pos2();
    scrollEvent_Pos3();    
    scrollEvent_Pos5();   
});

function scrollEvent_Pos1() {
    initPos();

    var scrollTop = $(document).scrollTop();
    var img = $('.home_header .title_background');
    var sect1Top = scrollTop - pos1;  
    var zoom_v1 = 1;
    var zoomCount_v1 = zoom_v1 + (sect1Top / 5000);        

    if(scrollTop >= pos1 && scrollTop < pos2){        
        img.css({'transform':'scale('+ (zoomCount_v1) +')'});
    }
}

function scrollEvent_Pos2() {

    var scrollTop = $(document).scrollTop();
    var $seasons_box = $('.home_seasons > .home_seasons_box');
    var move_01 = scrollTop / 5
    var move_02 = scrollTop / 10
    var move_03 = scrollTop / 10
    var move_04 = scrollTop / 5 
    
    $seasons_box.eq(0).find('.box').css({'transform':'translateY('+ ( move_01 ) +'px)'});
    $seasons_box.eq(1).find('.box').css({'transform':'translateY('+ ( -move_02 ) +'px)'});
    $seasons_box.eq(2).find('.box').css({'transform':'translateY('+ ( move_03 ) +'px)'});
    $seasons_box.eq(3).find('.box').css({'transform':'translateY('+ ( -move_04 ) +'px)'});   
}

function scrollEvent_Pos3() {
    initPos();

    var scrollTop = $(document).scrollTop();
    var videoTop = scrollTop - pos3

    if(scrollTop >= pos3 &&  scrollTop < pos4) {
        $('.home_media_video ').css({'top':videoTop+'px'});
    } 
}

function scrollEvent_Pos5() {      
    initPos();

    var scrollTop = $(document).scrollTop(); 
    var winWidth = $(window).innerWidth();   
    var winHeight = $(window).innerHeight();
    var horizontalLenght = $('.categories_gallery').prop('scrollWidth');
    var sect5Top_end = pos5 + $('.home_categories').outerHeight() - winHeight;
    var winWidth_half = winWidth / 2;
    var sect5ConHeight = $('.categories_gallery .gallery_box:last-child').innerHeight();
    var marginTop = (winHeight - sect5ConHeight) / 2        
    var sect5Top = (scrollTop - pos5)
    var sect5ConWidth = $('.categories_gallery .gallery_box:last-child').innerWidth(); 
    var sect5ConWidth_half = $('.categories_gallery .gallery_box:last-child').innerWidth() / 2    
    var sect5Con_posLeft = $('.categories_gallery .gallery_box:last-child').position().left;
    var posLeft = sect5Con_posLeft - winWidth_half + sect5ConWidth_half;
    var posNew_left = sect5Top - posLeft

    $('.home_categories').css({'height':horizontalLenght + winHeight, 'padding-top': marginTop, 'margin-top':-marginTop});
    $('.categories_wrap').css({'top': marginTop });
    $('.product_wrap').css({'margin-top':marginTop });      
    
    if (scrollTop < (pos5)) {  
        $('.categories_wrap').css({'position':'absolute', 'transform':'translateX('+ 0 +'px)','left': 0 +'px'});  
        $('.categories_gallery').css({'left': 0 +'px'});
        $('.product_wrap').removeClass('on').css({'position':'absolute'});
    } else if (scrollTop >= (pos5) && scrollTop < (pos5 + posLeft)) { 
        mouseMoving_v1();      
        $('.home_categories').addClass('on');
        $('.categories_wrap').css({'position':'fixed','transform':'translateX('+ 0 +'px)','left': 0 +'px'});       
        $('.categories_gallery').css({'left': -sect5Top +'px'});
        $('.product_wrap').css({'position':'fixed'});
    } else if (scrollTop >= (pos5 + posLeft) && scrollTop < (sect5Top_end)) {        
        $('.categories_wrap').css({'position':'fixed', 'transform':'translateX('+ -posNew_left +'px)'});
        $('.product_wrap').removeClass('on').css({'position':'fixed'});
        $('.home_categories').off('mousemove');
        $('.media_box').removeClass('show');   
        if (scrollTop >= (pos5 + posLeft + sect5ConWidth)) {            
            $('.product_wrap').addClass('on');
            mouseMoving_v2();
        }   
    } else if ( scrollTop > (sect5Top_end)){
        $('.home_categories').off('mousemove');
        $('.categories_wrap').css({'position':'absolute'}); 
        $('.product_wrap').removeClass('on').css({'position':'absolute'});        
    }   
}

function initPos() {   
  pos1 = $('.home_header').offset().top;
  pos2 = $('.home_seasons').offset().top;
  pos3 = $('.home_media').offset().top;
  pos4 = $('.home_highlight').offset().top;
  pos5 = $('.home_categories').offset().top;
  pos6 = $('.home_ingredients').offset().top;
}

function mouseMoving_v1 () {
    
    $('.gallery_box, .categories_content').mousemove(function(e){ 

        var date_cursor = $(this).attr('data-cursor');
        var mouseX = e.clientX;
        var mouseY = e.clientY; 
        
        $('.home_cursor').css({ left: mouseX + "px", top : mouseY + "px" });
        $('.home_cursor').addClass('show');

        if(date_cursor === '1') {
            $('.cursor_label_wrap').removeClass('one two three');
            $('.cursor_label_wrap').addClass('one');
        }else if(date_cursor === '2') {
            $('.cursor_label_wrap').removeClass('one two three');
            $('.cursor_label_wrap').addClass('two');
        }else if(date_cursor === '3') {
            $('.cursor_label_wrap').removeClass('one two three');
            $('.cursor_label_wrap').addClass('three');
        }
    });

    $('.gallery_box, .categories_content').mouseleave(function(){
      $('.home_cursor').removeClass('show'); 
    });
}

function mouseMoving_v2 () {

  $('.product_list li a').mouseenter(function(){
        var data_media = $(this).attr('data-media');

        if(data_media === '1') {
            $('.media_box').removeClass('one two three');
            $('.media_box').addClass('one');
        }else if(data_media === '2') {
            $('.media_box').removeClass('one two three');
            $('.media_box').addClass('two');
        }else if(data_media === '3') {
            $('.media_box').removeClass('one two three');
            $('.media_box').addClass('three');
        }
  });

  $('.home_categories').mousemove(function(e){ 
      
        var mouseX = e.clientX;
        var mouseY = e.clientY; 
        
        $('.media_box').css({ left: mouseX + "px", top : mouseY + "px"});
        $('.media_box').addClass('show'); 
      
  });
   
}