'use strict';
var test = require('ava');
var numberIsInteger = require('number-is-integer');
var inRange = require('in-range');
var stableFn = require('stable-fn');
var fn = require('./');

function fn2(min, max) {
	return stableFn(function () {
		return inRange(fn(min, max), min, max);
	});
}

test(function (t) {
	t.assert(numberIsInteger(fn(0, 10)));
	t.assert(!stableFn(function () {
		return fn(1);
	}));
	t.assert(stableFn(function () {
		return inRange(fn(1), 0, 1);
	}));
	t.assert(inRange(fn(1), 0, 1));
	t.assert(fn2(0, 1));
	t.assert(fn2(0, 2));
	t.assert(fn2(0, 10));
	t.assert(fn2(0, 100));
	t.assert(fn2(0, 0));
	t.assert(fn2(0, 1));
	t.assert(fn2(0, 2));
	t.assert(fn2(0, 10));
	t.assert(fn2(0, 100));
	t.assert(fn2(5, 10));
	t.assert(fn2(524234213, 99999999999));
	t.assert(fn2(-10, -5));
	t.end();
});
