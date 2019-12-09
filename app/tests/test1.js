import { displayChessBoard } from '../src/task1.js';

function test1(assert) {
  describe('1. displayChessBoard', function() {
    it('displayChessBoard(5, 5, "*") should return board 5x5', function() {
      assert.equal(displayChessBoard(5, 5, "*"), '*  *  *  *  *  \n  *  *  *  *  *\n*  *  *  *  *  \n  *  *  *  *  *\n*  *  *  *  *  \n');
    });
  });
}

export { test1 };
