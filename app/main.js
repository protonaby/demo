import {displayChessBoard} from "./src/task1.js";
import {analizeEnvelops} from "./src/task2.js";
import {sortTriangles} from "./src/task3.js";

console.log(displayChessBoard(5, 5, "*"));

console.log(analizeEnvelops({a: 10, b: 10}, {c: 11, d: 1}));
console.log(analizeEnvelops({a: 9, b: 9}, {c: 10, d: 10}));

console.log(sortTriangles([
  {vertices: 'DEF', d: 4, e: 5, f: 6},
  {vertices: 'ABC', a: 10, b: 20, c: 22.36}
]));

console.log(sortTriangles([
  {vertices: 'KLM', k: 10, l: 2, m: 3},
  {vertices: 'DEF', d: 4, e: 5, f: 6},
  {vertices: 'ABC', a: 10, b: 20, c: 22.36}
]));

console.log(sortTriangles([
  {vertices: 'KLM', z: 1, l: 2, m: 3},
  {vertices: 'DEF', d: 4, e: 5, f: 6},
  {vertices: 'ABC', a: 10, b: 20, c: 22.36}
]));
