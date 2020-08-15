var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

@@include('forms.js');

$(document).ready(function() {
	@@include('burger.js');

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================


// === services handler ==================================================================
{
	if($('.services__list').length>0) {
		$('.services__item').click(function(e) {
			$(this).parent().toggleClass('open');
			$(this).parent().find('.services__sub-list').slideToggle(300);
			//console.log(this)
		})
	}
}
// === // services handler ==================================================================



// === slider-insights ==================================================================
if($('.slider-insights').length>0) {
	$('.slider-insights').slick({
		slidesToScroll: 1,
		arrows: false,
		touchThreshold: 10,
		variableWidth: true,
		responsive: [
		  {
		    breakpoint: 992,
		    settings: {
		      centerMode: true,
		    }
		  },
		]
	})
}
// === // slider-insights ==================================================================





});


// ===  Banner video ==================================================================
//<span class="icon-pause2"></span>
function togglePlayPause(video,btn) {
	if(video.paused) {
		video.play();
		btn.firstElementChild.className = 'icon-pause2';
		btn.firstElementChild.style.marginLeft = '0px';

	} else {
		video.pause();
		btn.firstElementChild.className = 'icon-play3';
		btn.firstElementChild.style.marginLeft = '8px';
	}
}
{
	let video = document.querySelector('.bg-video__video');
	if(video) {
		let videoContainer = document.querySelector('.bg-video');
		let btn = videoContainer.querySelector('.bg-video__play-pause')

		let timerId;
	
		btn.addEventListener('click', () => {
			togglePlayPause(video, btn)
		});

		videoContainer.addEventListener('mousemove', (e) => {

			let btn = e.target.closest('.bg-video').querySelector('.bg-video__play-pause');
			btn.style.opacity = '1';
	
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				btn.style.opacity = '0';
			}, 3000);


		})
	}
}

{
	let video = document.querySelector('.bg-video__video-2');
	if(video) {
		let videoContainer = document.querySelector('.bg-video-2');
		let btn = videoContainer.querySelector('.bg-video__play-pause-2')

		let timerId;
	
		btn.addEventListener('click', () => {
			togglePlayPause(video, btn)
		});

		videoContainer.addEventListener('mousemove', (e) => {

			let btn = e.target.closest('.bg-video-2').querySelector('.bg-video__play-pause-2');
			btn.style.opacity = '1';
	
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				btn.style.opacity = '0';
			}, 3000);


		})
	}
}
// === // Banner video ==================================================================
