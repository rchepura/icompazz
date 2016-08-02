jQuery(document).ready(function() {
    var $ = jQuery,
        bgInterval = 4000;
        
        
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
                var email = $.trim($('[name="email"]').val());
                var data = {
                    'email': email
                };
                $.ajax({
                    type: 'POST',
                    url: 'mail.php',
                    data: data,
                    dataType: 'json',
                    success: function(res) {
                        top.RES = res;
                        if (res.success) {
                          $('.box-form .popover .error-email').hide();
                          $('.box-form .popover .success-email').show();
                          $('.box-form .popover').fadeIn();
                        } else {
                          $('.box-form .popover .error-email').show();
                          $('.box-form .popover .success-email').hide();
                          $('.box-form .popover').fadeIn();
                        }
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