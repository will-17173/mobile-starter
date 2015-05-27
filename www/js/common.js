FastClick.attach(document.body);

function SlideMenu(settings){
	$(settings.trigger).on('click', function(){
		$('body').toggleClass('slide-menu-active');
	})
}