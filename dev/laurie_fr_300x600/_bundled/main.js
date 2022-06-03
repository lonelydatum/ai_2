(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power2.out"
});

var w = size.w;
var h = size.h;

var peeps = {
	david: {
		t1: 1.2,
		t2: 2.3,
		t3: 2,
		t4: 3.3
	},
	laurie: {
		t1: 1.2,
		t2: 2,
		t3: 2,
		t4: 3.3
	}
};

var BG = 12;

function init2(obj) {

	var tl = new TimelineMax();
	var data = peeps[obj.name];

	tl.set(".frame1", { opacity: 1 });

	// return
	TweenLite.to(".bg", BG, _extends({ scale: .5 }, obj.tween, { ease: Linear.easeNone }));

	var IN = .5;
	var OUT = .3;

	tl.from(".t2", { duration: IN, opacity: 0 }, "+=" + data.t1);
	tl.to(".t2", { duration: OUT, opacity: 0 }, "+=" + data.t2);

	tl.from(".t3", { duration: IN, opacity: 0 });
	tl.to(".t3", { duration: OUT, opacity: 0 }, "+=" + data.t3);

	tl.from(".t4", { duration: IN, opacity: 0 });

	tl.add("done", "+=" + data.t4);
	tl.to(".t4", { duration: OUT, opacity: 0 }, "done");
	tl.to(".t1", { duration: IN, opacity: 0 }, "done");
	tl.from(".t5", { duration: IN, opacity: 0 });

	return tl;
}

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	TweenLite.to(".bg", 13, { x: -size.w / 2, y: -size.h / 2, scale: .5, ease: Linear.easeNone, onComplete: function onComplete() {
			// alert("sldkfj")
		} });

	var IN = .5;
	var OUT = .3;

	// tl.from(".t1", IN, {opacity:0})
	tl.to(".t1", { duration: OUT, opacity: 0 }, "+=2.3");

	tl.from(".t2", { duration: IN, opacity: 0 }, "+=.2");
	tl.to(".t2", { duration: OUT, opacity: 0 }, "+=2");

	tl.from(".t3", { duration: IN, opacity: 0 });
	tl.to(".t3", { duration: OUT, opacity: 0 }, "+=3.7");

	tl.from(".t4", { duration: IN, opacity: 0 });

	return tl;
}

exports.size = size;
exports.init = init;
exports.init2 = init2;
exports.BG = BG;
exports.peeps = peeps;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var data = {
	name: "laurie",
	// tween: {x:-259, y:-340}
	tween: { x: -324, y: -340 }
};
var tl = (0, _commonJsCommonJs.init2)(data);

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
