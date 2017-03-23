$.fn.numInput = function() {
	$(this).bind('keyup',function(){
	var number = numeral(this.value);
  	var string = number.format('0,0');
  	$(this).val(string);
    });
}