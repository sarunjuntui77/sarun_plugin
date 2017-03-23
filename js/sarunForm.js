$.fn.formSubmitErrorAjax = function(callback,option) {

var form = $(this);
var action = form.attr('action');
var method = form.attr('method');

if(option == undefined){option = {};}
if(option.ajax == undefined){option.ajax = true;}
if(option.log == undefined){option.log = false;}

form.on('submit', function(e) {

    e.preventDefault();
    // var form_data = new FormData(); 
    var required = $('#' + form.attr('id') + ' .required').length;
    var text_error = '';
    var form_object = {};

    $(this).find('.required').each(function() {
        if (this.value == '' && text_error == '') {
            text_error = $(this).attr('required-text');
        }else{
            if (this.value.length < $(this).attr('min') && text_error == '') {
                text_error = $(this).attr('min-text');
            }
        }
    });


    $(this).find('.form-data').each(function() {
        // form_data.append(this.name, this.value);
        form_object[this.name] = this.value;
    });
    
    if(option.log){console.log(form_object);}
    
    if (text_error == '') {
        if(option.ajax == true){
            $.ajax({
                url: action,
                dataType: 'text',
                data: form_object,
                cache: false,
                contentType: false,
                processData: false,
                type: method,
                success: function(data) {
                    callback(data);
                }

            });
        }
    }else{
        alert(text_error);
    }


});

		

}
