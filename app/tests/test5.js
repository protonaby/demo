import {  countLuckyTickets} from '../src/task5.js';

function test5(assert) {
  describe('5. countLuckyTickets', function() {
    it("countLuckyTickets({min: '000000', max:'111111'}) should return {winner: 'Hard', simple: 5134, hard: 5566}", function() {
      assert.deepEqual(countLuckyTickets({min: '000000', max:'111111'}), {winner: 'Hard', simple: 5134, hard: 5566});
    });
    it("countLuckyTickets({min: '000000', max:'999999'}) should return {winner: 'Draw', simple: 55252, hard: 55252}", function() {
      assert.deepEqual(countLuckyTickets({min: '000000', max:'999999'}), {winner: 'Draw', simple: 55252, hard: 55252});
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
