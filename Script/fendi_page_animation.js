console.log('fendi_page')

//Fendi Project Page
var myAnimation = new TimelineMax();
myAnimation.to('.j-project_img_list', .1, {opacity: 1});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '#j-intro_trigger',
  triggerHook: .1,
  offset: 0,
  duration: 1000,
}).setTween(myAnimation).addTo(controller); 
