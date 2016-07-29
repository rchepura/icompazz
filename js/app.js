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
    }
    
    init();
    
});