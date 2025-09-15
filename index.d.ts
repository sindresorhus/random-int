/**
Generate a random integer.

If `minimum` is greater than `maximum`, the values are swapped to return an integer from the lower value to the higher value.

@param minimum - Minimum integer to return. Default: `0`.
@param maximum - Maximum integer to return. Default: `1`.
@returns An integer from `minimum` to `maximum`.

@example
```
import randomInteger from 'random-int';

randomInteger(5);
//=> 3

randomInteger(10, 100);
//=> 54
```
*/
export default function randomInteger(minimum?: number, maximum?: number): number;
