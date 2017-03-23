
function sarunConfirm(option,callback) {
	var text = confirmText();
	$('body').prepend('<div class="black-screen"></div>');
	$('body').append(text);

	$('.confirm-head').html(option.head);
	$('.confirm-body').html(option.body);
	$('.confirm-box').fadeIn(10);
	$('.confirm-box').addClass('show');
	$('.confirm-box .yes').on('click',function(){
		callback();
		hideConfirm();
	});
	$('.confirm-box .no').on('click',function(){
		hideConfirm();
	});

}
function hideConfirm(){
	$('.confirm-box').removeClass('show');
	setTimeout(function(){
		$('.black-screen').remove();
		$('.confirm-box').hide();
		
	}, 400);
	

}
function confirmText(){
	return '<div class="confirm-box"><div class="confirm-head"></div>'
	+'<div class="confirm-body"></div><div class="confirm-bottom">'
    +'<button class="btn btn-green yes">ตกลง</button>'
    +'<button class="btn btn-red no">ยกเลิก</button></div>';
}
