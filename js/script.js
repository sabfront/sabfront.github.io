const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
menu.classList.remove('active');
});


const counters = document.querySelectorAll('.work__ratings-counter'),
    lines = document.querySelectorAll('.work__ratings-line span')

counters.forEach((item, i) => {
lines[i].style.width = item.innerHTML;

});

//FORM

$(document).ready(function(){

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                text: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: " ",
                    minlength: jQuery.validator.format(" ")
                  },
                text: " ",
                email: {
                  required: " ",
                  email: " "
                }
            }
        });
    };

    validateForms('#consultation-form');

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();

            $('form').trigger('reset');
        });
        return false;
    });
});

