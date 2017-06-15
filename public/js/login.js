/////**********SHINE**********/////

var shine = new Shine(document.getElementById('landingPageHeader'));

var config = new shinejs.Config({
numSteps: 2,
opacity: 0.5,
offset: 0.25,
shadowRGB: new shinejs.Color(160, 160, 160)
});

window.addEventListener('mousemove', function(event) {

shine.light.position.x = event.clientX;
shine.light.position.y = event.clientY;
shine.config = config;
shine.draw();
}, false);
