// 계산 기능을 하는 파일
console.log("CALCULATE START!")

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// console.log("calc", add(24, 30));

// calc 모듈 내보내기
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub,
}