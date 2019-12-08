import { test1 } from './test1.js';
import { test4 } from './test4.js';
import { test5 } from './test5.js';
mocha.setup('bdd');
const assert = chai.assert;

test1(assert);
test4(assert);
test5(assert);

mocha.run();
