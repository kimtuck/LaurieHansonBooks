webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/img/MorrisAnimal.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "MorrisAnimal.b86b180e0ed947b3fc8e.png";

/***/ }),

/***/ "../../../../../src/sass/site.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/sass/site.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/lib/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--8-3!./site.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/lib/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--8-3!./site.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/sass/site.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@import url(https://fonts.googleapis.com/css?family=Merriweather);\n@charset \"UTF-8\";\nhtml, body {\n  width: 100%;\n  height: 100%; }\n.flexbox-order-1 {\n  -webkit-box-ordinal-group: 1;\n  -ms-flex-order: 1;\n  order: 1; }\n.flexbox-order-2 {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 2;\n  order: 2; }\n.flexbox-order-3 {\n  -webkit-box-ordinal-group: 3;\n  -ms-flex-order: 3;\n  order: 3; }\n.flexbox-order-4 {\n  -webkit-box-ordinal-group: 4;\n  -ms-flex-order: 4;\n  order: 4; }\n.flexbox-flex-display {\n  /* display: flex */\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  /* ------ */ }\n.flexbox-main-wrapper {\n  height: 100%; }\n.flexbox-fixed {\n  -webkit-box-flex: 0;\n  -ms-flex: 0;\n  flex: 0; }\n.flexbox-container-column, nav, article, section {\n  /* display: flex */\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  /* ------ */\n  /* flexbox-direction-columns */\n  /* flex-direction */\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  /* ------ */\n  /* flex-wrap */\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  /* ------ */\n  /* end flexbox-direction-columns */\n  /* flex-wrap */\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  /* ------ */\n  min-height: 0px; }\n.flexbox-scrolling-column {\n  overflow-y: auto;\n  overflow-x: hidden; }\n.flexbox-container-row, .wrapper, .photo-text p {\n  /* display: flex */\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  /* ------ */\n  /* flexbox-direction-rows */\n  /* flex-direction */\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  /* ------ */\n  /* flex-wrap */\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  /* ------ */\n  /* end flexbox-direction-rows */\n  /* flex-grow */\n  -moz-flex-grow: 1;\n  -ms-flex-grow: 1;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  /* ------ */\n  min-height: 0px; }\n.flexbox-left-gutter,\n.flexbox-right-gutter {\n  /* flexbox-fixed-size-element*/\n  /* flex-grow */\n  -moz-flex-grow: 0;\n  -ms-flex-grow: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  /* ------ */\n  /* flex-shrink */\n  -ms-flex-shrink: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  /* ------ */\n  -ms-flex-basis: 200px;\n  -ms-flex-preferred-size: 200px;\n      flex-basis: 200px;\n  /* end flexbox-fixed-size-element */ }\nheader, footer {\n  /* flexbox-fixed-size-element*/\n  /* flex-grow */\n  -moz-flex-grow: 0;\n  -ms-flex-grow: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  /* ------ */\n  /* flex-shrink */\n  -ms-flex-shrink: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  /* ------ */\n  /* end flexbox-fixed-size-element */ }\n.flexbox-content-fill-horizontal {\n  /* display: flex */\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  /* ------ */\n  /* flex-grow */\n  -moz-flex-grow: 10;\n  -ms-flex-grow: 10;\n  -webkit-box-flex: 10;\n      -ms-flex-positive: 10;\n          flex-grow: 10;\n  /* ------ */ }\n.flexbox-content-fill-vertical {\n  /* display: flex */\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  /* ------ */\n  /* flex-grow */\n  -moz-flex-grow: 10;\n  -ms-flex-grow: 10;\n  -webkit-box-flex: 10;\n      -ms-flex-positive: 10;\n          flex-grow: 10;\n  /* ------ */ }\n.flexbox-content-fixed-size {\n  /* flexbox-fixed-size-element*/\n  /* flex-grow */\n  -moz-flex-grow: 0;\n  -ms-flex-grow: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  /* ------ */\n  /* flex-shrink */\n  -ms-flex-shrink: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  /* ------ */\n  /* end flexbox-fixed-size-element */ }\n.flexbox-center-items {\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.flexbox-left-center-right-items {\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.flexbox-space-around-items {\n  -moz-justify-content: space-around;\n  -ms-justify-content: space-around;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.flexbox-left-justify-items {\n  -moz-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.flexbox-right-justify-items {\n  -moz-justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.flexbox-shove-to-right-edge {\n  margin-left: auto; }\n.flexbox-basis-50 {\n  -ms-flex-basis: 50%;\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%; }\n.flexbox-flex-wrap {\n  /* flex-wrap */\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  overflow: hidden;\n  /* ------ */ }\n.flexbox-hide-when-wrapped {\n  height: 1em;\n  max-height: 1em;\n  /* flex-wrap */\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  overflow: hidden;\n  /* ------ */\n  overflow: hidden; }\n.flexbox-align-items-center {\n  -moz-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\nhtml {\n  position: fixed;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\nhtml, body, app-root, app-root > div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', 'Lora', 'Times New Roman', sans-serif;\n  font-size: 20px;\n  color: #333333;\n  background-color: #99BE9C; }\napp-root > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\napp-root > div > *:nth-child(3) {\n  padding: 10px 30px;\n  overflow-y: auto; }\napp-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  max-width: 500px;\n  min-width: 400px;\n  overflow-y: auto;\n  background-color: #7aaa7e; }\n/* NAV */\nnav > div {\n  -webkit-box-flex: 0 !important;\n      -ms-flex-positive: 0 !important;\n          flex-grow: 0 !important; }\nnav {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  font-size: 0.8em;\n  padding: 15px 30px 0px 30px;\n  border-right: solid black 1px;\n  /**/ }\nnav > * {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0; }\nnav a {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    color: black; }\nnav a:hover {\n      color: silver; }\nnav .navbar-brand {\n    font-weight: 800;\n    text-align: center; }\nnav .nav-buttons {\n    display: block;\n    margin: 10px 0px 10px 0px;\n    border-top: solid black 1px;\n    border-bottom: solid black 1px;\n    padding-top: 20px;\n    padding-bottom: 20px; }\nnav form {\n    margin-left: auto;\n    margin-right: auto;\n    width: 80%; }\nnav button {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 10px; }\nnav .maf {\n    font-size: 0.7em;\n    margin: 20px;\n    text-align: center; }\nnav .maf a {\n      margin-top: 10px; }\n.maf-image {\n  display: block;\n  height: 40px;\n  border: 0;\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/img/MorrisAnimal.png")) + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: black;\n  outline: solid green 2px; }\n.paypalbutton {\n  border: solid black 2px !important; }\n.paypalbutton div:nth-child(1) {\n    color: red;\n    font-size: 1.05em;\n    margin-bottom: 5px; }\n.winner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.winner img {\n    width: 10%; }\n.quotes {\n  width: 80%;\n  font: 14px/20px italic Times, serif;\n  padding: 8px;\n  background-color: #faebbc;\n  border-top: 1px solid #e1cc89;\n  border-bottom: 1px solid #e1cc89;\n  margin: 5px;\n  text-align: center; }\n.quotes blockquote {\n    font-size: 1.2em;\n    quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n.quotes blockquote:before {\n      color: #ccc;\n      content: open-quote;\n      font-size: 4em;\n      line-height: 0.1em;\n      margin-right: 0.25em;\n      vertical-align: -0.4em; }\n.quotes blockquote:after {\n      color: #ccc;\n      content: close-quote;\n      font-size: 4em;\n      line-height: 0.1em;\n      margin-right: 0.25em;\n      vertical-align: -0.4em; }\n.newsevents a {\n  text-decoration: underline; }\n.paybutton a:hover {\n  text-decoration: none; }\n.paybutton {\n  -webkit-box-shadow: inset 0px 1px 0px 0px #bbdaf7;\n  box-shadow: inset 0px 1px 0px 0px #bbdaf7;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #6aa06f), to(#5e9362));\n  background: linear-gradient(to bottom, #6aa06f 5%, #5e9362 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='$nav-button-background-color', endColorstr='$nav-button-background-color2',GradientType=0);\n  background-color: #6aa06f;\n  border-radius: 6px;\n  border: 1px solid black;\n  display: inline-block;\n  cursor: pointer;\n  color: #ffffff;\n  font-family: Arial;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 6px 10px;\n  text-decoration: none;\n  text-shadow: 0px 1px 0px #528ecc; }\n.paybutton:hover {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #378de5), to(#79bbff));\n  background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\n  background-color: #378de5; }\n.paybutton:active {\n  position: relative;\n  top: 1px; }\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nh1 {\n  text-align: center;\n  color: black;\n  font-size: 1em;\n  text-shadow: 1px 1px 0 white; }\nform.contact {\n  margin: 20px auto;\n  background-color: white;\n  border: solid black 2px;\n  padding: 20px;\n  max-width: 1000px; }\nform.contact label {\n    display: none; }\nform.contact input, form.contact textarea {\n    border: 0;\n    outline: 0;\n    padding: 1em;\n    border-radius: 4px;\n    display: block;\n    width: 100%;\n    margin-top: 1em;\n    font-family: 'Merriweather', sans-serif;\n    -webkit-box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);\n            box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.8);\n    resize: both; }\nform.contact input:focus, form.contact input:hover, form.contact textarea:focus, form.contact textarea:hover {\n      -webkit-box-shadow: 0 0px 2px #e74c3c !important;\n              box-shadow: 0 0px 2px #e74c3c !important; }\nform.contact small {\n    font-size: 0.6em;\n    color: #e74c3c; }\nform.contact #input-submit {\n    color: white;\n    background: #e74c3c;\n    cursor: pointer; }\nform.contact #input-submit:hover {\n      -webkit-box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);\n              box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6); }\nform.contact textarea {\n    height: 157px; }\n.half {\n  float: left;\n  width: 48%;\n  margin-bottom: 1em; }\n.right {\n  width: 50%; }\n.left {\n  margin-right: 2%; }\n.center {\n  margin-left: auto;\n  margin-right: auto; }\n@media (max-width: 1000px) {\n  .half {\n    width: 100%;\n    float: none;\n    margin-bottom: 0; } }\n/* Clearfix */\n.cf:before,\n.cf:after {\n  content: \" \";\n  /* 1 */\n  display: table;\n  /* 2 */ }\n.cf:after {\n  clear: both; }\n/**/\n.dragonfly-color {\n  color: #98499c; }\n.dragonfly-award {\n  text-align: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n.dragonfly-award img {\n    width: 50%; }\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', 'Lora', 'Times New Roman', sans-serif;\n  font-size: 20px;\n  color: #333333;\n  background-color: #99BE9C; }\n.cover-image:nth-child(1) {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2; }\n.cover-image:nth-child(2) {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n/* APPEARANCE */\na {\n  color: #333333;\n  text-decoration: none; }\na:hover, a:focus {\n    color: #0085A1; }\n.make-it-fast {\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n  /* Pre-render the bigger shadow, but hide it */\n  /* Transition to showing the bigger shadow on hover */ }\n.make-it-fast::after {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n    opacity: 0;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out; }\n.make-it-fast:hover::after {\n    opacity: 1; }\n.glow-button:hover {\n  color: white;\n  -webkit-box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);\n          box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4); }\n.strikeout {\n  text-decoration: line-through;\n  font-size: 0.8em; }\narticle, section {\n  padding: 10px; }\nsection {\n  -webkit-box-flex: 5;\n      -ms-flex-positive: 5;\n          flex-grow: 5; }\n.payment {\n  border: solid black 2px;\n  border-radius: 15px;\n  margin-right: 10px; }\n.book-title {\n  color: #98499c;\n  font-family: 'Devonshire', cursive; }\n.large-text {\n  font-size: 4em; }\n.photo-text {\n  margin-left: 20%;\n  margin-right: 20%; }\n.photo-text p .photo:nth-of-type(odd) img {\n    -webkit-box-ordinal-group: 1;\n    -ms-flex-order: 1;\n    order: 1; }\n.photo-text p.photo:nth-of-type(even) img {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 2;\n    order: 2; }\n.photo-text p img, .photo-text p .graphic {\n    -ms-flex-preferred-size: 20%;\n        flex-basis: 20%;\n    width: 20%;\n    height: 20%;\n    margin-right: 3%; }\n.photo-text p.photo.larger img {\n    width: 40%;\n    height: 40%; }\n.thermo {\n  font-size: 0.6em; }\n.thermo-date {\n  margin-top: 2px;\n  text-align: center; }\n.maf {\n  font-size: 0.8em; }\n.maf .title {\n    margin: 5px;\n    font-size: 1.2em;\n    font-weight: bold; }\n.maf button {\n    cursor: hand; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/sass/site.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map