import test from 'ava';
import inRange from 'in-range';
import stableFunction from 'stable-function';
import randomInteger from './index.js';

const inRangeCheck = ({start, end}) => stableFunction(() => inRange(randomInteger(start, end), {start, end}));

test('main', t => {
	t.true(Number.isInteger(randomInteger(0, 10)));
	t.false(stableFunction(() => randomInteger(1)));
	t.true(stableFunction(() => inRange(randomInteger(1), {start: 0, end: 1})));
	t.true(inRange(randomInteger(1), {start: 0, end: 1}));
	t.true(inRangeCheck({start: 0, end: 1}));
	t.true(inRangeCheck({start: 0, end: 2}));
	t.true(inRangeCheck({start: 0, end: 10}));
	t.true(inRangeCheck({start: 0, end: 100}));
	t.true(inRangeCheck({start: 0, end: 0}));
	t.true(inRangeCheck({start: 0, end: 1}));
	t.true(inRangeCheck({start: 0, end: 2}));
	t.true(inRangeCheck({start: 0, end: 10}));
	t.true(inRangeCheck({start: 0, end: 100}));
	t.true(inRangeCheck({start: 5, end: 10}));
	t.true(inRangeCheck({start: 524234213, end: 99999999999}));
	t.true(inRangeCheck({start: -10, end: -5}));
});

test('handles swapped min/max arguments', t => {
	// Test with positive numbers where min > max
	const results = [];
	for (let i = 0; i < 100; i++) {
		results.push(randomInteger(10, 5));
	}

	t.true(results.every(n => n >= 5 && n <= 10));

	// Test with negative numbers where min > max
	const negResults = [];
	for (let i = 0; i < 100; i++) {
		negResults.push(randomInteger(-5, -10));
	}

	t.true(negResults.every(n => n >= -10 && n <= -5));

	// Test with mixed positive/negative where min > max
	const mixedResults = [];
	for (let i = 0; i < 100; i++) {
		mixedResults.push(randomInteger(5, -5));
	}

	t.true(mixedResults.every(n => n >= -5 && n <= 5));
});
