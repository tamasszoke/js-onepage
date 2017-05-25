
function jsOnePage(defaults) {

	var root = this;
	var config = {};
	
	config.container = defaults.container || 'one-page-container';
	config.pages = defaults.pages;
	config.link_class = defaults.link_class || 'one-page-link';
	config.page_not_found = defaults.page_not_found;

	// Load page to the container
	root.load_page = function() {

		var hash = window.location.hash.substring(1);
		var hash_values = hash.substring(1).split('/');
		var page_name = hash_values[0];

		if (!page_name) page_name = Object.keys(config.pages)[0];
		if (!config.pages[page_name]) config.pages[page_name] = config.page_not_found;

		if (config.pages[page_name] && hash_values.length == 1) {

			$('#' + config.container).load(config.pages[page_name], {param: 'anything'}, function() {
		
				root.change_link(page_name);
			});

		} else {

			$('.' + config.link_class).removeClass('active');
			$('#' + config.container).html('<h1>Error 404</h1><h2>Page not found!</h2>');
		};
	};

	// Change navigation link style
	root.change_link = function(page_name) {

		$('.' + config.link_class).removeClass('active');
		$('.' + config.link_class + ':icontains("' + page_name + '")').addClass('active');
	};

	// jQuery addon, case insensitive 'contains' function, requies jQuery 1.8+
	jQuery.expr[':'].icontains = function(a, i, m) {

		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
};
