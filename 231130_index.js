console.log("Hello Node js");

// calc.js에 있는 모듈 가져다 쓰기
const calc = require("./calc");

console.log(calc.add(12, 80))
console.log(calc.add(234, 987))
console.log(calc.sub(987, 123))