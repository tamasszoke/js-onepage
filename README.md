# jsOnePage

Simple script for one-page applications.

## Usage

1. Include jsOnePage in your html:

```html
<script src="js/lib/jsOnePage.js"></script>
```

<br/>

2. Create the links in your html:

```html
<a class="nav-link one-page-link active" href="#/home">Home</a>
<a class="nav-link one-page-link" href="#/features">Features</a>
<a class="nav-link one-page-link" href="#/usage">Usage</a>
```

- The default classes: one-page-link
- You can specify custom classes too

<br/>

3. Create the container in your html:

```html
<div id="one-page-container" class="container"></div>
```

- The default id: one-page-container
- You can specify custom id too

<br/>

4. Create an instance in your .js file:

```javascript
var jso = new jsOnePage({
	pages: {
		'home': 'pages/home.html',
		'features': 'pages/features.html',
		'usage': 'pages/usage.html'
	},
	//container: 'id-of-any-div-tag', // optional, default: "one-page-container"
	//link_class: 'class-of-the-links', // optional, default: "one-page-link"
	//page_not_found: 'path/to/404.html' // optional, default is a simple 404 message
});
```

- The name here and the hash in the href must match (home, home)
- First of these will be the default page when hash not defined

<br/>

5. Listen for hashChange event:

```javascript
$(window).on('hashchange', jso.load_page).trigger('hashchange');
```


## License

<b>The MIT License (MIT)</b><br/>
Copyright (c) 2017 Tamas Szoke

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://opensource.org/licenses/MIT
