var listOptions = $('ul.dropdown-menu > li > a');

listOptions.click(function(ev) {
	var href = $(this).attr('href');
	var divToShow = $(href);
	var contentDivs = divToShow.parent().find('.content');

	contentDivs.removeClass('active');
	divToShow.addClass('active');
});
