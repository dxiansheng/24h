(function () {


    const dump = console.log;
    const dd = function ($arr,$k=true) {
            $arr = JSON.stringify($arr).split('"')
            var n = $arr.length
            for(var i=1;i<n ;i++){
                if(i%2 && !$k)
                    console.log($arr[i])
            }
        if($k)
            for(var i=1;i<n;i++) {
               i++
               i++
                console.log($arr[i])
                i++
            }

    }
    var $arr = {'a':'aaaaaaa','b':'bbbbbbbbbbbbbb','c':'ccccccccccc','cccccc':'1111111111111111111111111'};
    dump(typeof($arr));
    dump(init());

        var $a = document.getElementsByClassName('menu1')
            // TweenLite.from($a,3,{background:'red'})
            // TweenLite.from($a,3,{backgroundColor:'red',x:5000,delay:2})
            // TweenLite.from($a,3,{backgroundColor:'red',ease:Power3.easeInOut})
            // var  t =   TweenLite,
            // m =   TweenMax,
        var tl = new TimelineLite();

        // t.from($a,1,{x:-200,ease:SteppedEase.config(20)})
        // t.from($a,1,{x:-200,ease:SlowMo.ease.config(0.7,0.7,true)})
        // t.from($a,1,{x:-200,ease:RoughEase.ease.config({template:Power3.easeIn})})
    var $img1 = document.getElementsByClassName('img1')
    var $img = document.getElementsByClassName('img')
    var i = 0;
   /* tl.from($img1,0.3,{css:{"top":111,"opacity":1},ease:Power2.easeOut})
       .to($img1,0.3,{css:{"top":200,"opacity":1},ease:Power2.easeOut})
       .to($img1,0.3,{css:{"left":200,"opacity":0},ease:Power2.easeOut})
       .to($img1,0.3,{css:{"left":100,"opacity":1},ease:Power2.easeOut});*/
 // setTimeout(init,2000);


    function one() {
        $('.img').after(i++)
    }



init(tl,$img1)
    // alert(Math.random()*Math.random())
    })(jQuery)
function init(tl,obj){

    /*  tl.to($img1,0.3,{css:{"top":111,"opacity":1}})
     .to($img1,0.3,{css:{"top":200,"opacity":0}})
     .to($img1,0.3,{css:{"left":200,"opacity":1}})
     .to($img1,0.3,{css:{"left":300,"opacity":0},onComplete:function(){
     $img1.css({"top":200,"opacity":0});
     }});*/
     tl.fromTo(obj,2.3,{css:{"top":200,"opacity":1}},{css:{"top":111,"opacity":0},ease:Power2.easeOut},'+=1');

}