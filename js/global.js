var lettersRU = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщъыьЭэЮюЯя',
	lettersEN = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
	w = $(window),
	body = $('body'),
	popup = $('#popup'),
	popupContainer = ('#popup .container'),
	popupClose = $('#popup .close'),
	popupForm = $('#popup .form'),
	popupMessage = $('#popup .message'),
	speed = 400;

$('.caret > li > a').click(function() {
	$(this).removeAttr('href');
	var ul = $(this).siblings('ul');
	ul.slideToggle(400);
});

$('button#sticks').click(function() {
	$(this).toggleClass('close');
});


$('input[name=tel]').mask("+7 (999) 999-99-99");

$('input[name=name]').on('keyup keypress', function(e) {
    var lettersNew = lettersRU + lettersEN + " ";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

$('input[name=email]').on('keyup keypress', function(e) {
    var lettersNew = lettersEN + "@-._";
	return (lettersNew.indexOf(String.fromCharCode(e.which))!=-1);
});

function abs(object) {
	var scrollTop = body.scrollTop(),
    	hight = body.height();
	object.css('padding-top', scrollTop+20).fadeIn(speed).height(height-scrollTop-20);
}

$('.callback').click(function() {
	abs(popup);
});

popupClose.click(function() {
	popup.fadeOut(speed);
});



function a_group() {
	$('.a-group a.select').removeAttr('href');
}
a_group();



function drop_down() {
	if ($('.drop-down input').prop('checked')) {
		var friend = $(this).siblings('label');
		var friendHTML = friend.html();
		friend.parents('.drop-down').find('.text span').html(friendHTML);
		// console.log(friend);
	}

	var drop_down, list, item;

	$('.drop-down i').click(function() {
		$(this).toggleClass('rotate180');
		drop_down = $(this).parents('.drop-down');
		list = drop_down.find('.list');
		list.slideToggle(0);
	});
	$('.drop-down label').click(function() {
		var text = $(this).html();
		drop_down = $(this).parents('.drop-down');
		drop_down.find('.text span').html(text);
	});
	
}
drop_down();



function drop_down_yet(object, list) {
	object.removeAttr('href');
	var icon = object.find('i');
	object.click(function() {
		object.toggleClass('select')
		icon.toggleClass('icon-arrow-down-mini-green icon-arrow-down-mini-white').toggleClass('rotate180');
		list.slideToggle(0);
	});
}

drop_down_yet($('a.drop-nav-yet'), $('ul.drop-nav-yet'));
drop_down_yet($('.btn.entry'), $('.drop-nav-private'));


$('#header #banner').parallax({imageSrc: 'upload/main-banner.jpg'});

$('#main .adverts .list.left .content .c-green-1 + i').click(function() {
	$(this).toggleClass('icon-favourite-yellow').toggleClass('icon-favourite-yellow-o')
});