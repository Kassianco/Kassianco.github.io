console.log('index');

var myAnimation = new TimelineMax();
myAnimation.to('.my_name', 1, { x:100});



var myAnimation = new TimelineMax();
myAnimation.to('', 1, { y: -100});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '#trigger',
  triggerHook: .6,
  offset: 0,
  duration: 750
}).setTween(myAnimation).addTo(controller); 