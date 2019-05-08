console.log('index');


TweenMax.to('.my_name', 3, {
  y: 1, 
  opacity: 1,
  ease: Power4.easeOut,
});

TweenMax.to('#intro', 1, {
  y : 25, 
  ease: Bounce.easeOut
});

TweenMax.to('#work', 1.3, {
  y: 25, 
  
  ease: Bounce.easeOut,
});

TweenMax.to('#who', 1.4, {
  y: 25, 
 
  ease: Bounce.easeOut,
});


var myAnimation = new TimelineMax();
myAnimation.to('', 1, { y: -100});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '#trigger',
  triggerHook: .6,
  offset: 0,
  duration: 750
}).setTween(myAnimation).addTo(controller); 

