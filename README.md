AngularJs-ScrollIn
==================

An angularjs directive to add a class as the user scrolls down the page

## Usage:

 - Add `angular-scrollin.min.js` to your code:
```html
<script src="angular-scrollin.min.js"></script>
```
 - Add a dependency to the `iln-scrollin` module in your application.
```js
angular.module('MyApp', ['iln-scrollin']);
```

 - Add the `iln-scroll-in` attribute to the divs you want to add the class to
```html
<div iln-scroll-in>some content here</div>
```
## Options:

- The directive has 2 options that can be added to the tag

### data-scroll-in-class
- `data-scroll-in-class` will add a different class to the div over the default 'active'
```html
<div iln-scroll-in data-scroll-in-class="NEWCLASS">some content here</div>
```
### data-scroll-in-offset
- `data-scroll-in-offset` will set the percentage offset that the class will be added. Number between 0 and 1
```html
<div iln-scroll-in data-scroll-in-offset="0.19">some content here</div>
```
