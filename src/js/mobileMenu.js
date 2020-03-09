window.addEventListener('DOMContentLoaded', function(){
	'use strict';

let burger = document.querySelector('.burger-btn'),
			mMenu = document.querySelector('.m-menu'),
			close = document.querySelector('.m-menu__close');
			burger.addEventListener('click', function() {
				mMenu.classList.add('m-menu_active');
			});
			close.addEventListener('click', function() {
				mMenu.classList.remove('m-menu_active');
			});
			window.addEventListener('resize', ()=> {
				if(document.documentElement.clientWidth > 991) {
					mMenu.classList.remove('m-menu_active');
				}
			});

}); // -> end DOMContentLoaded