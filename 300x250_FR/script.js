var tl = new TimelineLite();

function initThis(){
	setElements();
}

function setElements(){
	TweenMax.set('#main_content', {opacity:1, delay:.3});

	TweenMax.set('#phone', {x:-300});
	TweenMax.set('.text1', {y:20, autoAlpha:0});
	TweenMax.set('.text2', {y:-50, autoAlpha:0});
	TweenMax.set('#phone2', {y:250});
	TweenMax.set('#cta', {y:10, autoAlpha:0});

	TweenMax.delayedCall(0.3, introFrame);
}

function introFrame() {
	// Frame1
	tl.to('#phone', 0.5, {z:"0.1px", rotation: 0.02, x:0, force3D:false, ease:Power2.easeOut})
	.to('.text1', 0.5, {z:"0.1px", rotation: 0.02, y:0, autoAlpha:1, force3D:false, ease:Power2.easeOut})
	.to('#frame1', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:0, force3D:false, ease:Power2.easeOut,delay:2.5})
	// Frame2
	.to('.text2', 0.5, {z:"0.1px", rotation: 0.02, y:0, autoAlpha:1, force3D:false, ease:Power2.easeOut})
	.to('#frame2', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:0, force3D:false, ease:Power2.easeOut,delay:1.5})
	// Frame2
	.to('#phone2', 0.5, {z:"0.1px", rotation: 0.02, y:0, force3D:false, ease:Power2.easeOut})
	.to('#cta', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:1, y:0, force3D:false, ease:Power2.easeOut})
}

window.addEventListener('load', initThis);