
var jso = new jsOnePage({
	pages: { // hash in href and name must match (home, home) !
		'home': 'pages/home.html', // first will be the default page when hash not defined !
		'features': 'pages/features.html',
		'usage': 'pages/usage.html',
		'other': 'pages/other.html'
	}
});