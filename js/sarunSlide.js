function setCssSlide(slide){
  slide.css('position','fixed');
  slide.css('left','0');
  slide.css('top','0');
  slide.css('position','absolute');
  slide.css('z-index','1');
  slide.css('height','100%');
}
function setCssPagingX(paging){
  paging.css('z-index','1');
  paging.css('position','absolute');
  paging.css('width','100%');
  paging.css('text-align','center');
  paging.css('bottom','10%');
}
function setCssDotX(dot){

  dot.css('background','#fff');
  dot.css('text-indent','-9999px');
  dot.css('display','inline-block');
  dot.css('width','10px');
  dot.css('height','10px');
  dot.css('margin','0 5px');
  dot.css('outline','0');
  dot.css('-moz-border-radius','5px');
  dot.css('-webkit-border-radius','5px');
  dot.css('border-radius','5px');
  
}
$.fn.sarunSlideX = function(time1,time2) {

	var frame = $(this);
  frame.css('position','relative');
  frame.css('overflow','hidden');

	var slide = frame.find( ".slide" );
  setCssSlide(slide);

	var item = slide.find( ".item" );
  item.css('float','left');

  var paging = frame.find( ".slide-paging" );
  var dot = paging.find( "a" );
  setCssPagingX(paging);
  setCssDotX(dot);

	var size = item.length;

	slide.css('width',(100*size)+'%');
	item.css('width',(100/size)+'%');
  item.css('height','100%');
  setTimeout(function(){
  work();
  },time2);

  dot.on('click',function(e){
  e.preventDefault();
  var target =  $(this).attr('target');
    $('.frame > .slide').find( ".item" ).each(function(item){
      if('#'+$(this).attr('id') == target){
        $(target).insertAfter($('.slide > .item').first());
        
        
      }
    })
  });

  function workByClick(index){
   
  }
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

