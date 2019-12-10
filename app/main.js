import {displayChessBoard} from "./src/task1.js";
import {analyzeEnvelops} from "./src/task2.js";
import {sortTriangles} from "./src/task3.js";
import {getPalindrome} from "./src/task4.js";
import {countLuckyTickets} from "./src/task5.js";
import {getNumericalSequence} from "./src/task6.js";
import {getFibonacci} from "./src/task7.js";

document.querySelector('.apply').addEventListener("click", () => {
  const height = parseInt(document.querySelector('.inp11').value);
  const width = parseInt(document.querySelector('.inp12').value);
  const symbol = document.querySelector('.inp13').value;
  displayResult(displayChessBoard(height, width, symbol));
});

document.querySelector('.apply2').addEventListener("click", () => {
  const a = parseFloat(document.querySelector('.inp21').value);
  const b = parseFloat(document.querySelector('.inp22').value);
  const c = parseFloat(document.querySelector('.inp23').value);
  const d = parseFloat(document.querySelector('.inp24').value);

  displayResult(analyzeEnvelops({a: a, b: b}, {c: c, d: d}));
});

document.querySelector('.apply3').addEventListener("click", () => {
  let v1 = document.querySelector('.inp31').value;
  let s1 = document.querySelector('.inp32').value.split(',');
  let v2 = document.querySelector('.inp33').value;
  let s2 = document.querySelector('.inp34').value.split(',');
  let v3 = document.querySelector('.inp35').value;
  let s3 = document.querySelector('.inp36').value.split(',');

  let triangles = [];
  if (v1 && s1) triangles.push(constructTriangleObject(v1, s1));
  if (v2 && s2) triangles.push(constructTriangleObject(v2, s2));
  if (v3 && s3) triangles.push(constructTriangleObject(v3, s3));
  displayResult(sortTriangles(triangles));
});

function constructTriangleObject(vertices, sides) {
  let s1names = vertices.toLowerCase().split('');
  let nameValues = [['vertices', vertices]];
  for (let i = 0; i < sides.length; i++)
    nameValues[i + 1] = [s1names[i], parseInt(sides[i], 10)];
  return Object.fromEntries(nameValues);
}

document.querySelector('.apply4').addEventListener("click", () => {
  const num = parseInt(document.querySelector('.inp41').value);
  displayResult(getPalindrome(num));
});

document.querySelector('.apply5').addEventListener("click", () => {
  const min = document.querySelector('.inp51').value;
  const max = document.querySelector('.inp52').value;
  displayResult(countLuckyTickets({min: min, max: max}));
});

document.querySelector('.apply6').addEventListener("click", () => {
  const n = parseInt(document.querySelector('.inp61').value);
  const m = parseInt(document.querySelector('.inp62').value);
  displayResult(getNumericalSequence(n, m));
});

document.querySelector('.apply7').addEventListener("click", () => {
  const min = parseInt(document.querySelector('.inp71').value);
  const max = parseInt(document.querySelector('.inp72').value);
  const length = parseInt(document.querySelector('.inp73').value);
  displayResult(getFibonacci({min: min, max: max, length: length}));
});

function displayResult(res) {
  if (typeof res == 'object')
    res = JSON.stringify(res, null, 4);
  document.querySelector('.output').value = res;
}

//accordion behavior
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
