$.fn.formSubmitErrorAjax = function() {
	
var form = $(this);
var action = form.attr('action');
var method = form.attr('method');


form.on('submit', function(e) {
    e.preventDefault();
    var form_data = new FormData();
    var required = $('#' + form.attr('id') + ' .required').length;
    var text_error = '';

    $('#' + form.attr('id') + ' .required').each(function() {
        if (this.value == '' && text_error == '') {
            text_error = $(this).attr('error');
        }
    });

    $('#' + form.attr('id') + ' .form_data').each(function() {
        form_data.append(this.name, this.value);
    });

    if (text_error == '') {
        $.ajax({
            url: action,
            dataType: 'text',
            data: form_data,
            cache: false,
            contentType: false,
            processData: false,
            type: method,
            success: function(data) {
                if (data == '1' || data == 1) {
                    alert(form.attr('success'));
                } else {
                    alert(form.attr('error'));
                }
            }

        });
    } else {
        alert(text_error);
    }


});

		

}
