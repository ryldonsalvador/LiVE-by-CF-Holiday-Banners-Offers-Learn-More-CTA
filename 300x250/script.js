var tl = new TimelineLite();

function initThis(){
	setElements();
}

function elemId(id) {
	return document.getElementById(id);
}

function setElements(){
	// addListeners();
	TweenMax.set('#main_content', {opacity:1, delay:.3});

	TweenMax.set('#phone', {x:-300});
	TweenMax.set('.text1', {y:50, autoAlpha:0});
	TweenMax.set('.text2', {y:-50, autoAlpha:0});
	TweenMax.set('#logo1', {autoAlpha:0});
	TweenMax.set('#phone2', {y:250});
	TweenMax.set('#cta', {y:10, autoAlpha:0});

	TweenMax.delayedCall(0.3, introFrame);
}

function addListeners(){
	elemId("cta").addEventListener("mouseover", mouseEvent);
	elemId("cta").addEventListener("mouseout", mouseEvent);
}

function clockAnim(){
	//clock
	// tl2.to('.clock_long_hand', 6, {rotation: '+=3600', ease : Linear.easeNone, transformOrigin: 'center 98%'})
	// .to('.clock_short_hand', 6, { rotation : '360', transformOrigin: 'center 98%', ease : Linear.easeNone }, "-=6")
}
function introFrame() {
	// Frame1
	tl.to('#phone', 0.5, {z:"0.1px", rotation: 0.02, x:0, force3D:false, ease:Power2.easeOut})
	.to('.text1', 0.5, {z:"0.1px", rotation: 0.02, y:0, autoAlpha:1, force3D:false, ease:Power2.easeOut})
	.to('#logo1', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:1, force3D:false, ease:Power2.easeOut})
	.to('#frame1', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:0, force3D:false, ease:Power2.easeOut,delay:1.5})
	// Frame2
	.to('.text2', 0.5, {z:"0.1px", rotation: 0.02, y:0, autoAlpha:1, force3D:false, ease:Power2.easeOut})
	.to('#frame2', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:0, force3D:false, ease:Power2.easeOut,delay:1.5})
	// Frame2
	.to('#phone2', 0.5, {z:"0.1px", rotation: 0.02, y:0, force3D:false, ease:Power2.easeOut})
	.to('#cta', 0.5, {z:"0.1px", rotation: 0.02, autoAlpha:1, y:0, force3D:false, ease:Power2.easeOut})
}

function removeOverflow(){
	//elemId("f2_copy_2_mask").style.overflow = "visible";
}

function mouseEvent(e){
	switch(e.target.id){
		case 'cta':
			switch(e.type){
				case 'mouseover':
					TweenMax.to('#cta', 0.3, {scale: 1.1, ease: Power2.easeOut});
				break;
				case 'mouseout':
					TweenMax.to('#cta', 0.3, {scale: 1, ease: Power2.easeOut});
				break;
			}
		break;
	}
}
window.addEventListener('load', initThis);