/**
Generate a random integer.

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
