$(document).ready(function() {
    var flame = $('#flame');
    var message = $('#message');
    var blowText = $('#blow-text');
    var audio = $('#birthday-audio')[0];

    flame.click(function() {
        flame.removeClass('burn').addClass('puff');
        flame.css('background-color', 'transparent');
        $('.smoke').addClass('puff-bubble');

        setTimeout(function() {
            $('#candle').fadeOut('slow', function() {
                blowText.hide();
                message.fadeIn('slow');
                audio.play();
            });
        }, 1000);
    });
});
