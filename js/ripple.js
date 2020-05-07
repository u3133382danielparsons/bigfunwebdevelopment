$( document ).ready(function() {
    $('.ripple').on('click', function(e) {
        $(this).find('.ripple-after').remove();
        $(this).append('<div class="ripple-after"></div>');
        let ripple = $(this).find('.ripple-after');
        ripple.removeClass('animate');
        let x = parseInt(e.pageX - $(this).offset().left) - (ripple.width() / 2);
        let y = parseInt(e.pageY - $(this).offset().top) - (ripple.height() / 2);
        ripple.css({top: y, left: x}).addClass('animate');
    });
});