import test from 'ava';
import inRange from 'in-range';
import stableFn from 'stable-fn';
import randomInteger from './index.js';

const inRangeCheck = ({start, end}) => stableFn(() => inRange(randomInteger(start, end), {start, end}));

test('main', t => {
	t.true(Number.isInteger(randomInteger(0, 10)));
	t.false(stableFn(() => randomInteger(1)));
	t.true(stableFn(() => inRange(randomInteger(1), {start: 0, end: 1})));
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
