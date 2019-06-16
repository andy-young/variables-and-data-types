function handleClicks() {
	let clickCount = 0;
	
	$('.js-click-counter').text(clickCount);

	$('.js-clicker').click(e => {
		clickCount++;
		$('.js-click-counter').text(clickCount);

	});
}

$(handleClicks);