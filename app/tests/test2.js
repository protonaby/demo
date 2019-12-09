import { analizeEnvelops } from '../src/task2.js';

function test2(assert) {
  describe('2. analizeEnvelops function', function() {
    it('analizeEnvelops({a: 10, b: 10}, {c: 11, d: 1}) should return 1', function() {
      assert.equal(analizeEnvelops({a: 10, b: 10}, {c: 11, d: 1}), 1);
    });
    it('analizeEnvelops({a: 9, b: 9}, {c: 10, d: 10}) should return 2', function() {
      assert.equal(analizeEnvelops({a: 9, b: 9}, {c: 10, d: 10}), 2);
    });
    it('analizeEnvelops({a: 10, b: 9}, {c: 10, d: 10}) should return 0', function() {
      assert.equal(analizeEnvelops({a: 10, b: 9}, {c: 10, d: 10}), 0);
    });
  });
}

export { test2 };
