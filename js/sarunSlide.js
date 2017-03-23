$.fn.sarunSlideX = function(time1,time2) {

	var frame = $(this);
  frame.css('position','relative');
  frame.css('overflow','hidden');

	var slide = frame.find( ".slide" );
  setCssSlide(slide);

	var item = slide.find( ".item" );
  item.css('float','left');

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
  frame.css('position','relative');
  frame.css('overflow','hidden');

  var slide = frame.find( ".slide" );
  setCssSlide(slide);

  var item = slide.find( ".item" );
  item.css('float','left');

  var up_step = frame.attr('up-step');
  var show = frame.attr('show');

  var size = item.length;

  var item_height = item.css('height');
  item_height = item_height.replace('px','');

  var frame_height = show * item_height;

  slide.css('width',(100)+'%');
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

function setCssSlide(slide){
  slide.css('position','fixed');
  slide.css('left','0');
  slide.css('top','0');
  slide.css('position','absolute');
  slide.css('z-index','1');
  slide.css('height','100%');
}