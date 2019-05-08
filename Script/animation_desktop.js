console.log('index');


TweenMax.to('.my_name', 3, {
  y: 1, 
  opacity: 1,
  ease: Power4.easeOut,
});

TweenMax.to('#j-intro', .8, {
  y : 25, 
  ease: Bounce.easeOut
});

TweenMax.to('#j-work', .9, {
  y: 25, 
  
  ease: Bounce.easeOut,
});

TweenMax.to('#j-who', 1, {
  y: 25, 
 
  ease: Bounce.easeOut,
});

//Animation in Intro Page
var myAnimation = new TimelineMax();
myAnimation.to('#j-intro_text', 1, { y: 4});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.j-intro_trigger',
  triggerHook: .6,
  offset: 0,
  duration: 500,
  opacity:1
}).setTween(myAnimation).addTo(controller); 

//Animation in Work Page
var myAnimation = new TimelineMax();
myAnimation.to('#j-work_title', 1, { y: 350});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '#j-work_trigger',
  triggerHook: .8,
  offset: 0,
  duration: 1000
}).setTween(myAnimation).addTo(controller); 