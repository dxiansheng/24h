/**
 * Created by admin on 2017/6/22.
 */
(function () {
    const M = TweenMax;

    // function bg() {
    //
    //     $('.bg').slideUp(1000)
    //     $('.bg').slideDown(1000)
    // }
    // function bg2() {
    //     $('.bg').hide(1000)
    //     $('.bg').show(1)
    // }
    // init();
function init(){
    var h24 = $('.h24'),font1  = $('.font1'),font2 = $('.font2'),font3 = $('.font3');
    M.to([h24], 0.5, { repeat:100000,opacity:0.5,yoyo:true});
    M.to([font1,font2,font3], 1, { repeat:100000,opacity:0.1,yoyo:true});
}
})(jQuery)