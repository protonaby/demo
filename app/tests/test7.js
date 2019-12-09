import { getFibonacci } from '../src/task7.js';

function test7(assert) {
  describe('7. getFibonacci function', function() {
    it("getFibonacci({min: 0, max: 10, length: 10}) should return error status", function() {
      assert.deepEqual(getFibonacci({min: 0, max: 10, length: 10}), {status: 'failed', reason: 'only one of length or min and max can be specified'});
    });
    it('getFibonacci({min: 0, max: 35}) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', function() {
      assert.deepEqual(getFibonacci({min: 0, max: 35}), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it('getFibonacci({min: 1, max: 35}) should return [1, 1, 2, 3, 5, 8, 13, 21, 34]', function() {
      assert.deepEqual(getFibonacci({min: 1, max: 35}), [1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it('getFibonacci({min: 3, max: 35}) should return [3, 5, 8, 13, 21, 34]', function() {
      assert.deepEqual(getFibonacci({min: 3, max: 35}), [3, 5, 8, 13, 21, 34]);
    });
    it('getFibonacci({min: 35, max: 3}) should return []', function() {
      assert.deepEqual(getFibonacci({min: 35, max: 3}), []);
    });
    it('getFibonacci({length: 2}) should return [13, 21, 34, 55, 89]', function() {
      assert.deepEqual(getFibonacci({length: 2}), [13, 21, 34, 55, 89]);
    });
    it('getFibonacci({length: 1}) should return [0, 1, 1, 2, 3, 5, 8]', function() {
      assert.deepEqual(getFibonacci({length: 1}), [0, 1, 1, 2, 3, 5, 8]);
    });
  });
}

export { test7 };
