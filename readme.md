# random-int

> Generate a random integer

## Install

```
$ npm install random-int
```

## Usage

```js
import randomInteger from 'random-int';

randomInteger(5);
//=> 3

randomInteger(10, 100);
//=> 54
```

## API

### randomInteger(maximum?)

Returns an integer from `0` to `maximum`.

### randomInteger(minimum, maximum)

Returns an integer from `minimum` to `maximum`.

#### minimum

Type: `number`\
Default: `0`

Minimum integer to return.

#### maximum

Type: `number`\
Default: `1`

Maximum integer to return.

## Related

- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float
- [random-item](https://github.com/sindresorhus/random-item) - Get a random item from an array
- [random-obj-key](https://github.com/sindresorhus/random-obj-key) - Get a random key from an object
- [random-obj-prop](https://github.com/sindresorhus/random-obj-prop) - Get a random property from an object
- [unique-random](https://github.com/sindresorhus/unique-random) - Generate random numbers that are consecutively unique
- [unique-random-array](https://github.com/sindresorhus/unique-random-array) - Get consecutively unique elements from an array
- [crypto-random-string](https://github.com/sindresorhus/crypto-random-string) - Generate a cryptographically strong random string
