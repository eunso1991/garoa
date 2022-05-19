$(document).ready(function(){
    setTimeout(function(){
      $('.about_header_title').addClass('on');
    }, 1000);
   
    $('.about_season_des').find('span').addClass('indi_event');
    $('.about_skin_des').find('span').addClass('indi_event');
    $('.about_irritation_des').find('span').addClass('indi_event');

    $('.about_header_title span').each(function(i){
        this.style.setProperty("--char-index", i);
    });

    $('.about_season .title span').each(function(i){
        this.style.setProperty("--char-index", i);
    });

    $('.about_skin .title span').each(function(i){
        this.style.setProperty("--char-index", i);
    });

    $('.about_galleryRoom .title span').each(function(i){
        this.style.setProperty("--char-index", i);
    });
    
  });

  $(window).on('scroll resize', function() {               
    scrollEvent_Pos2();
    scrollEvent_Pos1();
    scrollEvent_Pos6('#main .about_galleryRoom');
  });

  function initPos() {   
      pos1 = $('.about_header').offset().top;
      pos2 = $('.about_season').offset().top;
      pos3 = $('.about_skin').offset().top;
      pos4 = $('.about_irritation').offset().top;
      pos5 = $('.home_ingredients').offset().top;
      pos6 = $('.about_galleryRoom').offset().top;
  }

  function scrollEvent_Pos1() {
    initPos();

      var scrollTop = $(document).scrollTop();
      var img = $('.about_header_media img');        
      var sect01Top = scrollTop - pos1;  
      var zoom_v1 = 1;
      var zoomCount_v1 = zoom_v1 + (sect01Top / 5000);        

      if(scrollTop >= pos1 && scrollTop < pos2){        
        img.css({'transform':'scale('+ (zoomCount_v1) +')'});
      }
  }

  function scrollEvent_Pos2() {
    initPos();

    var scrollTop = $(document).scrollTop();
    var winHeight = $(window).innerHeight();
    var sect02Top = scrollTop - pos2
    var sect03Top = scrollTop - pos3   
    var season_highlight = $('.about_season_highlight').prop('scrollWidth');
    var season_highlight_half = season_highlight / 2
    var season_highlight_half2 = season_highlight_half / 2
    var spring = $('.about_gallery_media.media01');
    var summer = $('.about_gallery_media.media02');
    var autumn = $('.about_gallery_media.media03');
    var zoom_v1 = 0.5 / winHeight;
    var zoomCount_v1 = sect02Top * zoom_v1;
    var zoom_v2 = (season_highlight_half - season_highlight_half2) / winHeight;
    var zoomCount_v2 = sect02Top * zoom_v2;
    var zoom_v3 = 0.1 / winHeight;
    var zoomCount_v3 = sect03Top * zoom_v3
    var zoomCount_v4 = zoomCount_v3 *300
    var opacityCount = 1 / winHeight;
    var opacity = sect02Top * opacityCount;
    var sect02Top_last = scrollTop - (pos2 + winHeight + winHeight + winHeight)
    var img02 = $('.about_skin_media img');
    var img03 = $('.outside img');
    var img04 = $('.inside img');

    if(scrollTop < pos2){
      $('.about_season_content').css({'position':'absolute', 'transform':'translateY('+ 0 +'px)'});
      spring.css({'opacity': 1, 'transform':'scale('+ (1) +')'});
      summer.css({'opacity': 1, 'transform':'scale('+ (1) +')'}); 
      autumn.css({'opacity': 1, 'transform':'scale('+ (1) +')'}); 

    } else if(scrollTop >= pos2 && scrollTop < pos2 + winHeight) {
      $('.about_season_highlight').css({'transform':'translateX('+ -zoomCount_v2 +'px)'});
      $('.about_season_content').css({'position':'fixed', 'transform':'translateY('+ 0 +'px)'});
      spring.css({'opacity': 1 - opacity, 'transform':'scale('+ (1 + zoomCount_v1) +')'});
      summer.css({'opacity': 1});  
    } else if(scrollTop >= pos2 + winHeight && scrollTop < pos2 + winHeight + winHeight) {
      $('.about_season_highlight').css({'transform':'translateX('+ -zoomCount_v2 +'px)'});
      $('.about_season_content').css({'position':'fixed', 'transform':'translateY('+ 0 +'px)'});
      spring.css({'opacity': 0});
      summer.css({'opacity': 2 - opacity, 'transform':'scale('+ (0.5 + zoomCount_v1) +')'}); 
      autumn.css({'opacity': 1}); 
    } else if(scrollTop >= pos2 + winHeight + winHeight && scrollTop < pos2 + winHeight + winHeight + winHeight) {
      $('.about_season_highlight').css({'transform':'translateX('+ -zoomCount_v2 +'px)'});
      $('.about_season_content').css({'position':'fixed', 'transform':'translateY('+ 0 +'px)'});
      summer.css({'opacity': 0});
      autumn.css({'opacity': 3 - opacity, 'transform':'scale('+ (0 + zoomCount_v1) +')'}); 
    } else if(scrollTop >= pos2 + winHeight + winHeight + winHeight) {
      
      autumn.css({'opacity': 0});
      
      $('.about_season_content').css({'position':'fixed', 'transform':'translateY('+ -sect02Top_last +'px)'});

      
        img02.css({'transform':'scale('+ (1.2 - zoomCount_v3) +')'});
        img03.css({'transform':'scale('+ (1.35 - zoomCount_v3) +')','top' : + zoomCount_v4 +'px'});
        img04.css({'transform':'scale('+ (1.35 - zoomCount_v3) +')', 'top' : + zoomCount_v4 +'px'});
     
      
      
    }
  }
  
function scrollEvent_Pos6(selector) {
    initPos();

    if (matchMedia("screen and (min-width:768.1px)").matches) { 
      $(selector).each(function() {
        var $selector = $(this);
        var winHeight = $(window).innerHeight();
        var start = $selector.offset().top - $(window).innerHeight();
        var end = $selector.offset().top + $selector.innerHeight();
        var $seasons_box = $('.about_galleryRoom > .about_gallery_box');
        var scrollAmt = $(document).scrollTop();
        var move_01 = (scrollAmt - pos6 + winHeight) / 10        

        if (scrollAmt < start) {            
           
        } else if (scrollAmt > end) {
           
        } else {
            if( $selector.hasClass('on') === false) {
                $selector.removeClass('on');
            }           
            
            $seasons_box.eq(0).find('.about_gallery_media').css({'transform':'translateY('+ (100-move_01) +'px)'});
            $seasons_box.eq(1).find('.about_gallery_media').css({'transform':'translateY('+ (move_01) +'px)'});
            $seasons_box.eq(2).find('.about_gallery_media').css({'transform':'translateY('+ (100-move_01) +'px)'});
            $seasons_box.eq(3).find('.about_gallery_media').css({'transform':'translateY('+ (100-move_01) +'px)'});   
            $seasons_box.eq(4).find('.about_gallery_media').css({'transform':'translateY('+ (100-move_01) +'px)'});
            $seasons_box.eq(5).find('.about_gallery_media').css({'transform':'translateY('+ (move_01) +'px)'});
            $seasons_box.eq(6).find('.about_gallery_media').css({'transform':'translateY('+ (move_01) +'px)'});
            $seasons_box.eq(7).find('.about_gallery_media').css({'transform':'translateY('+ (move_01) +'px)'});   
        }  
      });
    }
      

    
}