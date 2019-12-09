import { sortTriangles } from '../src/task3.js';

function test3(assert) {
  describe('3. sortTriangles', function() {
    it('sortTriangles([{vertices: \'DEF\', d: 4, e: 5, f: 6},{vertices: \'ABC\', a: 10, b: 20, c: 22.36}]) should return [ \'ABC\', \'DEF\' ]', function() {
      assert.deepEqual(sortTriangles([
        {vertices: 'DEF', d: 4, e: 5, f: 6},
        {vertices: 'ABC', a: 10, b: 20, c: 22.36}
      ]), [ 'ABC', 'DEF' ]);
    });
    it('sortTriangles([{vertices: \'KLM\', k: 12, l: 15, m: 18}, {vertices: \'DEF\', d: 4, e: 5, f: 6}, {vertices: \'ABC\', a: 10, b: 20, c: 22.36}]) should return [\'ABC\', \'KLM\', \'DEF\']', function() {
      assert.deepEqual(sortTriangles([
        {vertices: 'KLM', k: 12, l: 15, m: 18},
        {vertices: 'DEF', d: 4, e: 5, f: 6},
        {vertices: 'ABC', a: 10, b: 20, c: 22.36}
      ]), [ 'ABC', 'KLM', 'DEF' ]);
    });
    it('sortTriangles([{vertices: \'KLM\', k: 10, l: 2, m: 3}, {vertices: \'DEF\', d: 4, e: 5, f: 6}]) should return error status', function() {
      assert.deepEqual(sortTriangles([
        {vertices: 'KLM', k: 10, l: 2, m: 3},
        {vertices: 'DEF', d: 4, e: 5, f: 6}
      ]), {status: 'failed', reason: `triangle KLM is not a valid triangle`});
    });
    it('sortTriangles([{vertices: \'KLM\', k: 1, l: 2, m: 3}, {vertices: \'DEF\', d: 4, e: 5, f: 6}]) should return error status', function() {
      assert.deepEqual(sortTriangles([
        {vertices: 'KLM', z: 1, l: 2, m: 3},
        {vertices: 'DEF', d: 4, e: 5, f: 6}
      ]), {status: 'failed', reason: `triangle KLM not a valid triangle object`});
    });
  });
}

export { test3 };
