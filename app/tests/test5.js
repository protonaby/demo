import {  countLuckyTickets} from '../src/task5.js';

function test5(assert) {
  describe('5. countLuckyTickets function', function() {
    it("countLuckyTickets({min: '000000', max:'111111'}) should return {winner: 'Simple', simple: 5134, hard: 4949}", function() {
      assert.deepEqual(countLuckyTickets({min: '000000', max:'111111'}), {winner: 'Simple', simple: 5134, hard: 4949});
    });
    it("countLuckyTickets({min: '000000', max:'999999'}) should return {winner: 'Simple', simple: 55252, hard: 48552}", function() {
      assert.deepEqual(countLuckyTickets({min: '000000', max:'999999'}), {winner: 'Simple', simple: 55252, hard: 48552});
    });
    it("countLuckyTickets({min: '000000', max:'-99999'}) should return error status", function() {
      assert.deepEqual(countLuckyTickets({min: '000000', max:'-99999'}), {status: 'failed', reason: 'min and max should be strings representing numbers between 000000 and 999999'});
    });
    it("countLuckyTickets({min: '000000', max:'99999'}) should return error status", function() {
      assert.deepEqual(countLuckyTickets({min: '000000', max:'99999'}), {status: 'failed', reason: 'min and max should be strings representing numbers between 000000 and 999999'});
    });
    it("countLuckyTickets({min: '000000', max:'99999'}) should return error status", function() {
      assert.deepEqual(countLuckyTickets({min: '00000a', max:'999999'}), {status: 'failed', reason: 'min and max should be strings representing numbers between 000000 and 999999'});
    });
  });
}

export {
  test5
};
