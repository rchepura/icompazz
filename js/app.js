jQuery(document).ready(function() {
    var $ = jQuery,
        progress_inprocess = false,
        bgInterval = 3000;
        
        
    window.$ = $;
    
    function init() {
        var $slideBG = $('.icompazz-wrapper-slider'),
            doAnim = function(pos) {
                console.log('eee');
                $slideBG.stop().animate({left: ( pos ? '-100%' : 0)}, function() {
                    window.setTimeout(function() {
                        doAnim(!pos);
                    }, bgInterval);
                });
            };
        
            window.setTimeout(function() {
                console.log('eee 1');
                doAnim();
            }, bgInterval);
    }
    
    init();
    
});