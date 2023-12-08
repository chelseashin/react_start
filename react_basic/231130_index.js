console.log("Hello Node js");

// calc.js에 있는 모듈 가져다 쓰기
const calc = require("./calc");

console.log(calc.add(12, 80))
console.log(calc.add(234, 987))
console.log(calc.sub(987, 123))

const randomColor = require('randomcolor');

console.log(randomColor());

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);