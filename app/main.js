import {displayChessBoard} from "./src/task1.js";
import {analyzeEnvelops} from "./src/task2.js";
import {sortTriangles} from "./src/task3.js";
import {getPalindrome} from "./src/task4.js";
import {countLuckyTickets} from "./src/task5.js";
import {getNumericalSequence} from "./src/task6.js";
import {getFibonacci} from "./src/task7.js";

// document.querySelector('.task1_header').addEventListener("click", () => {
//   let el = document.querySelector('.task1_body');
//   if (el.style.display === "none")
//     el.style.display = "block";
//   else
//     el.style.display = "none";
// });
//
document.querySelector('.apply').addEventListener("click", () => {
  const inputs = [...document.querySelectorAll('[class^=inp1')];
  const data = {};
  inputs.forEach(inp => {
    data[inp.className] = inp.value;
  });
  let res = displayChessBoard(...Object.values(data));
  if (typeof res == 'object')
    res = JSON.stringify(res, null, 4);
  document.querySelector('.output').value = res;
  console.log('in apply');
});

document.querySelector('.apply2').addEventListener("click", () => {
  const a = parseFloat(document.querySelector('.inp21').value);
  const b = parseFloat(document.querySelector('.inp22').value);
  const c = parseFloat(document.querySelector('.inp23').value);
  const d = parseFloat(document.querySelector('.inp24').value);

  let res = analyzeEnvelops({a: a, b: b},{c: c, d: d});
  if (typeof res == 'object')
    res = JSON.stringify(res, null, 4);
  document.querySelector('.output').value = res;
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
