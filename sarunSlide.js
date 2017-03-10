$.fn.sarunSlide = function(time) {

	var frame = $(this);

	var slide = frame.find( ".slide" );
	var item = slide.find( ".item" );

	var size = item.length;

	slide.css('width',(100*size)+'%');
	item.css('width',(100/size)+'%');

  setInterval(function(){
    slide.animate({
      left:'-100%'
      },time,function(){

        item = slide.find( ".item" );

        item = $(this).find( ".item" );
        item.first().appendTo(slide);

        slide.css('left','0');
    });
  }
  ,time*2);

}