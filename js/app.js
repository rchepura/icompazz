jQuery(document).ready(function() {
    var $ = jQuery,
        progress_inprocess = false,
        bgInterval = 3000;
        
        
    window.$ = $;
    
    function init() {
        var $slideBG = $('.icompazz-wrapper-slider'),
            $slideItems = $slideBG.find('.icompazz-wrapper-slider-box').length,
            doAnim = function(pos) {
                pos = pos || 1;
                $slideBG.stop().animate({left: '-' + (pos * 100) + '%'}, 700, function() {
                    pos++;
                    window.setTimeout(function() {
                        if ( $slideItems === pos ) {
                            $slideBG.css({left: 0});
                            pos = 1;
                        }
                        doAnim(pos);
                    }, bgInterval);
                });
            };
        
            window.setTimeout(function() {
                doAnim();
            }, bgInterval);
            
        if ( !top.submitEmail ) {
            top.submitEmail = function submitEmail() {
                var email = jQuery.trim(jQuery('[name="email"]').val());
                var data = {
                    'email': email
                };
                jQuery.ajax({
                    type: 'POST',
                    url: 'submit',
                    data: data,
                    dataType: 'json',
                    encode: true,
                    success: function(output) {
//                        if (output == 'succeeded') {
//                          jQuery('#more-info .popover .error-email').hide();
//                          jQuery('#more-info .popover .success-email').show();
//                          jQuery('#more-info .popover').fadeIn();
//                        } else {
//                          jQuery('#more-info .popover .error-email').show();
//                          jQuery('#more-info .popover .success-email').hide();
//                          jQuery('#more-info .popover').fadeIn();
//                        }
                    },
                    error: function(xhr, textStatus, errorThrown) {
//                        alert(errorThrown);
                    }
                });
                return false;
            }
        }
    }
    
    init();
    
});