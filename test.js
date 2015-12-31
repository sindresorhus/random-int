import test from 'ava';
import numberIsInteger from 'number-is-integer';
import inRange from 'in-range';
import stableFn from 'stable-fn';
import fn from './';

function fn2(min, max) {
	return stableFn(() => inRange(fn(min, max), min, max));
}

test(t => {
	t.true(numberIsInteger(fn(0, 10)));
	t.false(stableFn(() => fn(1)));
	t.true(stableFn(() => inRange(fn(1), 0, 1)));
	t.true(inRange(fn(1), 0, 1));
	t.true(fn2(0, 1));
	t.true(fn2(0, 2));
	t.true(fn2(0, 10));
	t.true(fn2(0, 100));
	t.true(fn2(0, 0));
	t.true(fn2(0, 1));
	t.true(fn2(0, 2));
	t.true(fn2(0, 10));
	t.true(fn2(0, 100));
	t.true(fn2(5, 10));
	t.true(fn2(524234213, 99999999999));
	t.true(fn2(-10, -5));
});
