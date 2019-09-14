/**
Generate a random integer.

@param minimum - Minimum integer to return. Default: `0`.
@param maximum - Maximum integer to return. Default: `1`.
@returns An integer from `minimum` to `maximum`.

@example
```
import randomInt = require('random-int');

randomInt(5);
//=> 3

randomInt(10, 100);
//=> 54
```
*/
declare function randomInt(minimum?: number, maximum?: number): number;

export = randomInt;
