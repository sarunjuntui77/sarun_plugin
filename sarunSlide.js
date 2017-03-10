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

  var size = item.length;

  slide.css('width',(100)+'%');
  slide.css('height',(200)+'%');

  item.css('width',(100)+'%');
  item.css('height',(100/size)+'%');

   setTimeout(function(){
      work();
    },time2);

  function work(){
    slide.animate({
      top:'-'+(200/size)+'%'
      },time1,'linear'
      ,function(){

        item = slide.find( ".item" );

        item = $(this).find( ".item" );
        item.first().appendTo(slide);

        slide.css('top','0');
        setTimeout(function(){
          work();
        },time2);
    });
  }

}