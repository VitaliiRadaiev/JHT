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


// === content-header__title correct height ==================================================================
{
	let titleBox = document.querySelectorAll('.content-header__title-wrap');

	if(titleBox.length > 0) {
		let observer = new MutationObserver(mutationRecords => {
			for(let item of titleBox) {
				let height = item.firstElementChild.clientHeight;
				item.style.minHeight = height + 'px';			
			}
		})
		
		for(let item of titleBox) {
			let height = item.firstElementChild.clientHeight;
			item.style.minHeight = height + 'px';


			observer.observe(item, {
			  childList: true, 
			  subtree: true,
			  characterDataOldValue: true,
			});
			
		}
	}
}
// === // content-header__title correct height ==================================================================

// ==== case-study-card hover =======================================================
async function correctHeightMobile() {
	let cardsAdvantages = document.querySelectorAll('.case-study-card');
	let title = document.querySelectorAll('.case-study-card__title');
	
	const getheightTitle = () => {
		let arr = [];
		for(let i of title) {
			arr.push(i.offsetHeight);
		}

		return Math.max(...arr);
	}

	let heightTitle = await getheightTitle();
	
	for(let i of title) {
		i.style.minHeight = heightTitle + 'px';
	}

	if(cardsAdvantages) {
		for(let card of cardsAdvantages) {
			let hoverBox = card.querySelector('.case-study-card__hever-box');
			let img = card.querySelector('.case-study-card__img');
			let height = hoverBox.offsetHeight
			hoverBox.style.transform = 'translateY(' + (height - heightTitle) + 'px)';
			hoverBox.setAttribute('data-position', 'down');
			img.style.height = (card.offsetHeight - heightTitle) + 'px';
		}
		
		$('.case-study-card').click(function(e) {
			let hoverBox = this.querySelector('.case-study-card__hever-box');
			let height = hoverBox.offsetHeight;

			if(hoverBox.dataset.position == 'down') {
				hoverBox.style.transform = 'translateY(0px)';
				hoverBox.dataset.position = 'top';
			} else {
				hoverBox.style.transform = 'translateY(' + (height - heightTitle) + 'px)';
				hoverBox.dataset.position = 'down';
			}
		});
	}
}

async function correctHeight() {
	let cardsAdvantages = document.querySelectorAll('.case-study-card');
	let title = document.querySelectorAll('.case-study-card__title')
	//let images = document.querySelectorAll('.case-study-card__img')

	const getHeightCard = () => {
		let arr = [];
		for(let card of cardsAdvantages) {
			arr.push(card.offsetHeight);
		}
		return Math.max(...arr);
	}

	const getheightTitle = () => {
		let arr = [];
		for(let i of title) {
			arr.push(i.offsetHeight);
		}

		return Math.max(...arr);
	}

	let heightTitle = await getheightTitle();
	// let heightCard = await getHeightCard();
	// console.log(heightCard) 

	for(let i of title) {
		i.style.minHeight = heightTitle + 'px';
	}

	// for(let i of images) {
	// 	i.style.height = (heightCard - heightTitle) + 'px';
	// }

	if(cardsAdvantages) {
		for(let card of cardsAdvantages) {
			let hoverBox = card.querySelector('.case-study-card__hever-box');
			let img = card.querySelector('.case-study-card__img');
			let cardHeight = await card.getBoundingClientRect().height;

			img.style.height = (cardHeight - heightTitle) + 'px';
			let height = await hoverBox.getBoundingClientRect().height;
			//console.log(height)
			hoverBox.style.transform = 'translateY(' + (height - heightTitle) + 'px)';
		}

		$('.case-study-card').hover(function(e){
			let hoverBox = this.querySelector('.case-study-card__hever-box');
			hoverBox.style.transform = 'translateY(0px)';
			}, function(){
			let hoverBox = this.querySelector('.case-study-card__hever-box');
			let height = hoverBox.offsetHeight;
			hoverBox.style.transform = 'translateY(' + (height - heightTitle) + 'px)';
		})
	}
}

if (isMobile.any()) {
	let cardsAdvantages = document.querySelectorAll('.case-study-card');
	if(cardsAdvantages) {
		correctHeightMobile();

		window.addEventListener('resize', () => {
			if(document.documentElement.clientWidth >= 1650) {
				correctHeightMobile();
			}  else if((document.documentElement.clientWidth < 1650)){
				correctHeightMobile();
			}
		});
	}
} else {
	let cardsAdvantages = document.querySelectorAll('.case-study-card');
	if(cardsAdvantages) {
		correctHeight();

		window.addEventListener('resize', () => {

			if((document.documentElement.clientWidth >= 1650)) {
				correctHeight();

			} else if((document.documentElement.clientWidth < 1650)){
				correctHeight();

			}
		});
	}
}


// ==== // case-study-card hover =======================================================


// ====  load-more-btn =======================================================
let loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
	loadMoreBtn.addEventListener('click', (e) => {
		e.preventDefault();
	})
}
// ==== // load-more-btn =======================================================




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
