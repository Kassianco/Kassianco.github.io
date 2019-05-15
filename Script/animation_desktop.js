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
myAnimation.to('#j-intro_text', .1, { y: 4, opacity: 1});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.j-intro_trigger',
  triggerHook: .1,
  offset: 0,
  duration: 300,
  opacity:1
}).setTween(myAnimation).addTo(controller); 

//Animation in Work Page
var myAnimation = new TimelineMax();
myAnimation.to('#j-work_title', 1, { y: 400, opacity: 1});

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-work_trigger',
  triggerHook: .8,
  offset: 0,
  duration: 1000
}).setTween(myAnimation).addTo(controller); 

//Animation Projects description
//First Project
var myAnimation = new TimelineMax();
myAnimation.to('.j-project1', 1, {y: 1, opacity: 1});

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-project1_trigger',
  triggerHook: .8,
  duration: 1000
}).setTween(myAnimation).addTo(controller);

//Second Project
var myAnimation = new TimelineMax();
myAnimation.to('.j-project2', 1, {y: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-project2_trigger',
  triggerHook: .8,
  duration: 1000
}).setTween(myAnimation).addTo(controller);

//Third Project
var myAnimation = new TimelineMax();
myAnimation.to('.j-project3', 1, {y: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-project3_trigger',
  triggerHook: .8,
  duration: 1000
}).setTween(myAnimation).addTo(controller);

//Fourth Project
var myAnimation = new TimelineMax();
myAnimation.to('.j-project4', 1, {y: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-project4_trigger',
  triggerHook: .8,
  duration: 1000
}).setTween(myAnimation).addTo(controller);

//Fifth Project
var myAnimation = new TimelineMax();
myAnimation.to('.j-project5', 1, {y: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-project5_trigger',
  triggerHook: .8,
  duration: 1000
}).setTween(myAnimation).addTo(controller);

//Animation project images
//Fendi
var myAnimation = new TimelineMax();
myAnimation.to('.j-img_fendi', 1, {x: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-img_fendi_trigger',
  triggerHook: .7,
  duration: 150
}).setTween(myAnimation).addTo(controller);

//TheFork
var myAnimation = new TimelineMax();
myAnimation.to('.j-img_thefork', 1, {y: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-img_thefork_trigger',
  triggerHook: .7,
  duration: 200
}).setTween(myAnimation).addTo(controller);

//PinGo
var myAnimation = new TimelineMax();
myAnimation.to('.j-img_pingo', 1, {opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-img_pingo_trigger',
  triggerHook: .8,
  duration: 350
}).setTween(myAnimation).addTo(controller);

//Svolta 
var myAnimation = new TimelineMax();
myAnimation.to('.j-img_svolta', 1, {x: 1, opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-img_svolta_trigger',
  triggerHook: .7,
  duration: 170
}).setTween(myAnimation).addTo(controller);

//Videomaking
var myAnimation = new TimelineMax();
myAnimation.to('.j-img_video', 1, {opacity: 1})

var scene = new ScrollMagic.Scene({
  triggerElement: '#j-img_video_trigger',
  triggerHook: .7,
  duration: 200
}).setTween(myAnimation).addTo(controller);




