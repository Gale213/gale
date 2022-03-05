
function Validator(options) {

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);
        

        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        } else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form)

    if(formElement) {
        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector);            
            if(inputElement) {
                inputElement.onblur = function() {            
                   validate(inputElement, rule)
                }
            }

    });
    }
}


Validator.Length = function(selector, min, max) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >=8 && value.length<= 20 ? undefined:'Vui lòng nhập từ 8-15 kí tự'

        }
    }
}

Validator.Math = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,20}$/;
            return regex.test(value) ? undefined:'Vui lòng nhập 8-20 kí tự theo mẫu: Ab3n43bn';


        }
    }
}