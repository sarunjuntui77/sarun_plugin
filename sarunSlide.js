$.fn.sarunSlideX = function(time1,time2) {

	var frame = $(this);

	var slide = frame.find( ".slide" );
	var item = slide.find( ".item" );

	var size = item.length;

	slide.css('width',(100*size)+'%');
	item.css('width',(100/size)+'%');
  setTimeout(function(){
  work();
  },time2);

  function work(){
    slide.animate({
      left:'-100%'
      }, time1, 'linear'
      ,function(){

        item = slide.find( ".item" );

        item = $(this).find( ".item" );
        item.first().appendTo(slide);

        slide.css('left','0');
        setTimeout(function(){
          work();
        },time2);
    });
  }

}
$.fn.sarunSlideY= function(time1,time2) {

  var frame = $(this);

  var slide = frame.find( ".slide" );
  var item = slide.find( ".item" );

  var up_step = frame.attr('up-step');
  var show = frame.attr('show');

  var size = item.length;

  var item_height = item.css('height');
  item_height = item_height.replace('px','');

  var full_height = size * item_height;
  var frame_height = show * item_height;

  slide.css('width',(100)+'%');
  slide.css('height',full_height+'%');

  item.css('width',(100)+'%');

  frame.css('height',frame_height+'px')

   setTimeout(function(){
      work();
    },time2);

  function work(){
    slide.animate({
      top:'-'+(item_height*up_step)+'px'
      },time1,'linear'
      ,function(){

      for (var i = 0; i < up_step; i++) {
        slide = frame.find( ".slide" );
        item = slide.find( ".item" );

        item = $(this).find( ".item" );
        item.first().appendTo(slide);

        
      }
      slide.css('top','0');
        setTimeout(function(){
          work();
        },time2);
        
    });
  }

}