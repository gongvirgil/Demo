$(document).ready(function() {
    var random_images = ['menu images', 'background images', 'footer', 'header', 'videos', 'profiles', 'wallpaper', 'photos', 'produce pictures', 'fact sheet'];
    var background = ['#000000', '#FF0000', '#0097AA', '#F29500', '#C23916', '#94C849', '#6FA014', '#91009B'];

    var use_css3 = false;
    var style = document.body.style;

    if (typeof style['transition'] == 'string') {
        use_css3 = true;
    }

    // Tests for vendor specific prop
    var prefix = ['Webkit', 'Moz', 'Khtml', 'O', 'ms'];
    for (var i = 0; i < prefix.length; i++) {
        if (typeof(style[prefix[i] + 'Transition']) == 'string') {
            use_css3 = true;
        }
    }

    function update(element) {
        var num = parseInt(element.text(), 10);

        if (num === 100) {
            num = 0;
        }

        element.text(num + 1 + '%');

        setTimeout(function() {
            update(element);
        }, Math.random() * 200);
    }

    function updateProgress(element) {
        var num = parseInt(element.text(), 10);

        if (num === 100) {
            num = 0;
        }

        element.text(num + 1);
        progress_loader.width(num + 1 + '%');

        setTimeout(function() {
            updateProgress(element);
        }, Math.random() * 100);
    }

    function updateMeter(element) {
        var num = parseInt(element.text(), 10);

        if (num === 100) {
            num = 0;
        }

        element.text(num + 1 + '%');

        setTimeout(function() {
            updateMeter(element);
        }, 20);
    }

    // number mode
    var loader_example = $('#loader_example');
    var loader = loader_example.find('span.loader');
    var percentage = $('#loader_example span.percentage');

    // text mode
    var text_loader_overlay = $('#loader_example2 span.text_loader span');

    // logo mode
    var logo_overlay = $('#loader_example3').children('span.logo_loader').children('span');
    var meter = $('#loader_example3').find('span.meter');

    // progress mode
    var progress = $('#loader_example4').find('.percentage');
    var progress_loader = $('#loader_example4').find('.loader div');

    // scale text
    var scale_text = $('#loader_example5').find('.text_loader span');

    if (!use_css3) {
        // number mode
        if (loader_example.length) {
            loader_example.data('bg_checkbox', loader_example.find('input.bg'));

            var _animateName = function() {
                info.css({
                    opacity: 1,
                    top: '60%'
                });
                info.animate({
                    top: '10%',
                    opacity: 0
                }, 300, 'linear', _animateName);
            };
            _animateName();

            var _animateBg = function() {
                var random_bg_index = parseInt(Math.random() * (background.length - 1), 10);
                if (loader_example.data('bg_checkbox').prop('checked')) {
                    loader_example.animate({
                        'backgroundColor': background[random_bg_index]
                    }, 300, 'linear', _animateBg);
                } else {
                    setTimeout(_animateBg, 300);
                }
            };
            _animateBg();
        }


        // text mode
        if (text_loader_overlay.length) {
            var text_percentage = 0;
            var _animateTextLoader = function() {
                if (text_percentage >= 100) {
                    text_percentage = 0;
                }
                text_loader_overlay.css('left', text_percentage + '%');

                text_percentage += 5;
            };
            setInterval(_animateTextLoader, Math.random() * 20 + 50);
        }


        // logo number
        if (logo_overlay.length) {
            var logo_meter = 0;
            var _animateLogoMeter = function() {

                if (logo_meter >= 100) {
                    logo_meter = 0;
                }
                logo_overlay.css('bottom', logo_meter + '%');

                logo_meter += 1;
            };
            setInterval(_animateLogoMeter, 20);
        }
    }


    // logo mode
    if (logo_overlay.length) {
        setTimeout(function() {
            updateMeter(meter);
        }, Math.random() * 200);
    }

    // number mode
    if (loader_example.length) {
        setTimeout(function() {
            update(percentage);
        }, Math.random() * 200);
    }

    // progress mode
    if (progress.length) {
        setTimeout(function() {
            updateProgress(progress);
        }, Math.random() * 100);
    }

    // scale text
    if (scale_text.length) {
        var count = 0;

        var _update = function() {
            if (count >= scale_text.length) {
                count = 0;
                scale_text.removeClass('loaded');
            }

            scale_text.eq(count).addClass('loaded');
            count++;

            if (count == scale_text.length) {
                setTimeout(_update, 2000);
            } else {
                setTimeout(_update, Math.random() * 80);
            }
        };

        setTimeout(_update, Math.random() * 80);
    }
});
