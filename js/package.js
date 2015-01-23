(function($) {
	/* Setting */
	var $remoteDomain = 'http://managed.nattodaisuki.com/';
	var $localDomain  = 'http://nattodaisuki.com/';
	var $dir          = location.href.replace( $localDomain, '' ).split('/');


	$.ajax({
		type: 'GET',
		url: $remoteDomain + 'wp-json/posts/',
		dataType: 'json'
	}).done(function(json) {
		console.log(json);
		var len = json.length;
		for (var i = 0; i < len; i++) {
			link = json[i].link.replace('managed.', '');
			$(".ajax").append('<li><a href="' + link + '">' + json[i].title + '</a></li>');
		}
	}).fail(function(json) {
		console.log(json);
	});
})(jQuery);
