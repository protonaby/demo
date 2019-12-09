import { getPalindrome } from '../src/task4.js';

function test4(assert) {
  describe('4. getPalindrome', function() {
    it('getPalindrome(101) should return 101', function() {
      assert.equal(getPalindrome(101), 101);
    });
    it('getPalindrome(3443) should return 3443', function() {
      assert.equal(getPalindrome(3443), 3443);
    });
    it('getPalindrome(100) should return 0', function() {
      assert.equal(getPalindrome(100), 0);
    });
    it('getPalindrome(12337) should return 33', function() {
      assert.equal(getPalindrome(12337), 33);
    });
    it('getPalindrome(123337) should return 333', function() {
      assert.equal(getPalindrome(123337), 333);
    });
    it('getPalindrome(1234437) should return 3443', function() {
      assert.equal(getPalindrome(1234437), 3443);
    });
    it('getPalindrome(123443887) should return 3443', function() {
      assert.equal(getPalindrome(123443887), 3443);
    });
  });
}

export { test4 };
