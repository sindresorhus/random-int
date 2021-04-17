import {expectType} from 'tsd';
import randomInteger from './index.js';

expectType<number>(randomInteger());
expectType<number>(randomInteger(5));
expectType<number>(randomInteger(10, 100));
