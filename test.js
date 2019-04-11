import test from 'ava';
import inRange from 'in-range';
import stableFn from 'stable-fn';
import randomInt from '.';

function inRangeCheck(min, max) {
	return stableFn(() => inRange(randomInt(min, max), min, max));
}

test('main', t => {
	t.true(Number.isInteger(randomInt(0, 10)));
	t.false(stableFn(() => randomInt(1)));
	t.true(stableFn(() => inRange(randomInt(1), 0, 1)));
	t.true(inRange(randomInt(1), 0, 1));
	t.true(inRangeCheck(0, 1));
	t.true(inRangeCheck(0, 2));
	t.true(inRangeCheck(0, 10));
	t.true(inRangeCheck(0, 100));
	t.true(inRangeCheck(0, 0));
	t.true(inRangeCheck(0, 1));
	t.true(inRangeCheck(0, 2));
	t.true(inRangeCheck(0, 10));
	t.true(inRangeCheck(0, 100));
	t.true(inRangeCheck(5, 10));
	t.true(inRangeCheck(524234213, 99999999999));
	t.true(inRangeCheck(-10, -5));
});
