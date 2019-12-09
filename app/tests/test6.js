import { getNumericalSequence } from '../src/task6.js';

function test6(assert) {
  describe('6. getNumericalSequence function', function() {
    it('getNumericalSequence(5, 16) should return \'4,5,6,7,8\'', function() {
      assert.equal(getNumericalSequence(5, 16), '4,5,6,7,8');
    });
    it("getNumericalSequence(0, 4) should return error status", function() {
      assert.deepEqual(getNumericalSequence(0, 4), {status: 'failed', reason: 'n should be a number between 1 and 99'});
    });
    it("getNumericalSequence(5, 'a') should return error status", function() {
      assert.deepEqual(getNumericalSequence(5, 'a'), {status: 'failed', reason: 'm should be a positive number'});
    });
  });
}

export { test6 };
