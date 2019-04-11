import {expectType} from 'tsd';
import randomInt = require('.');

expectType<number>(randomInt());
expectType<number>(randomInt(5));
expectType<number>(randomInt(10, 100));
