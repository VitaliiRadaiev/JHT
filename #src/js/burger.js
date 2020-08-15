// === Burger Handler =====================================================================
{
	let isOpen = false;

	let navigation = document.querySelector('.navigation');
	let content = document.querySelector('.navigation__content');
	let width = content.getBoundingClientRect().width;
	let mobileMenu = document.querySelector('.content-navigation__inner');
	let btn = document.querySelector('.navigation__enquire-now');


	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');

		navigation.classList.toggle('open');


		if(!isOpen) {
			if(document.documentElement.clientWidth >= 992) {
				navigation.style.width = '100%';
				isOpen = true;
			} else {
				$('.content-navigation__inner').slideToggle(300);
				isOpen = true;
			}
		} else {
			if(document.documentElement.clientWidth >= 992) {
				navigation.style.width = '82px';
				isOpen = false;
			} else {
				$('.content-navigation__inner').slideToggle(300);
				isOpen = false;
			}
		}
	}
	$('.burger-wrap').click((e) => burgerBtnAnimation(e));
	
	window.addEventListener('resize', () => {
		if(isOpen && document.documentElement.clientWidth >= 992) {
			navigation.style.width = '100%';

		} else if(!isOpen && document.documentElement.clientWidth >= 992) {
			navigation.style.width = '82px';

		}

		if(isOpen && document.documentElement.clientWidth < 992) {
			mobileMenu.style.display = 'block';
		} else if(!isOpen && document.documentElement.clientWidth < 992) {
			mobileMenu.style.display = 'none';
		}
	});
	// === enquire-now btn ==================================================================

		
		if(btn) {
			let navigationForm = document.querySelector('.navigation__form-wrap');
			btn.addEventListener('click', () => {
				if(isOpen && document.documentElement.clientWidth >= 992) {
					navigationForm.classList.toggle('open');
					btn.classList.toggle('active');
				}

				if(document.documentElement.clientWidth < 992) {
					$('.navigation__form-wrap').slideToggle(300);
					btn.classList.toggle('active');
					navigationForm.classList.toggle('open');
				}
			});
		}

	// === // enquire-now btn ==================================================================
 
}
// === Burger Handler =====================================================================	