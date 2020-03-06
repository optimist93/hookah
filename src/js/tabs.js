window.addEventListener('DOMContentLoaded', function(){
	'use strict';
	let tab = document.querySelectorAll('.menu-header__item'),
			info = document.querySelector('.menu-header'),
			tabContent = document.querySelectorAll('.menu-tabcontent');

	function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click', function(event){
		let target = event.target;
		for(let i = 0; i < tab.length; i++){
			tab[i].classList.remove('active');
			target.classList.add('active');
		}
		if(target && target.classList.contains('menu-header__item')){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
}); // -> end DOMContentLoaded