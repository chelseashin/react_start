let name = "chelseashin";

let name2 = "채원";

let name3 = `chelsea >> ${name} ${name2}`;

console.log(name3); // 백틱 template Literal(템플릿리터럴 - 변수 넣어서 사용하는 용도)

let isSwitchOff = false;

isSwitchOff = true;
console.log(isSwitchOff);

let a = null;
console.log(a);

let variable;
console.log(variable);

let numA = 12;
let numB = "24";
console.log(numA * numB);
console.log(numA + numB);
console.log(numA + parseInt(numB)); // 의도적으로 형 변환하기

// 대입 연산자
let b = 3;
let c = 5;
console.log(b + c, b * c);

// 연결연산자
let e = "123";
let f = "456";
console.log(e + f);

e += "789";
console.log(e);

let g = 10;
g++; // 증감연산자: 뒤에 + 쓰면 이 라인이 실행되고 난 후 +1이 됨.

console.log(g++); /// 후위연산자: 증감연산자 뒤에 쓰는 것
g = 20;
console.log(g--);
console.log(g);

console.log("--g", --g); // 전위연산자: 증감연산자를 만난 시접의 라인부터 바로 반영됨

console.log(!true);
console.log(!false);

console.log(true && false); // &&: and
console.log(false && false);
console.log(true && true); // 둘 다 true 일 때만 true

console.log(true || false); // ||: or(둘 중 하나만 true여도 true)
console.log(false || false); // false

// let compareA = 1 == "1";
// console.log(compareA); // true: 값이 같으므로 true라고 함

// let compareB = 1 === "1";
// console.log(compareB); // false: 값은 같으나 자료형이 다르므로 false가 됨

// let compareC = 1 != "1";
// let compareD = 1 !== "1";
// console.log(compareC, compareD);

// console.log(typeof compareC, typeof g);

let x = 6;

if (x >= 7) {
  console.log("7 이상");
} else if (x >= 5) {
  console.log("5 이상");
} else {
  console.log("5 미만~");
}

let n = "uk";

switch (n) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미분류");
    break;
}

// 화살표 함수
let hello = () => "안녕 첼시";
console.log(hello());

// 콜백함수
function chkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback(); // 함수표현식
  } else {
    badCallback();
  }
}

function cry() {
  console.log("울어");
}
function sing() {
  console.log("노래~");
}
function dance() {
  console.log("춤~");
}

chkMood("bad", dance, cry); // 함수의 파라미터에 함수를 통채로 넘김

// 객체
let person = new Object(); // 객체 생성
let person1 = {}; // 객체 리터럴 방식

console.log(person, person1);

let person2 = {
  name: "chelseashin",
  key1: "value", //객체 프로퍼티
  key2: 87,
  key3: true,
  key4: [1, 2, 3],
  key5: function () {
    console.log("이건 함수야");
    console.log(`나는 ${this.name}이야`);
    console.log(`나는 ${this["name"]}이야222`);
  },
}; // 객체 리터럴 방식

console.log(person2.key3);
console.log(person2["key4"]);

person2.location = "한국";
console.log(person2.location);

person2["age"] = 28;
console.log(person2);

// 프로퍼티 삭제
delete person2.age;
delete person2["key4"];

// 추천
person2.key3 = null;
console.log(person2);

person2.key5();
person2["key5"]();

// 프로퍼티가 객체에 존재하는지 알 수 있는 방법(in)
console.log(`name: ${"name" in person2}`); // true 반환
console.log(`name: ${"age" in person2}`); // false 반환

// 객체 생성자
let person3 = new Object(); // 방법 1
let person4 = {}; // 방법 2: 객체 리터럴 방식

console.log(typeof person3, typeof person4);

let person5 = {
  key: "value",
  key2: "value2",
};

console.log(person5);

let arr1 = new Array();
let arr2 = []; // 배열 리터럴
let arr3 = [1, "123", true, null, undefined, {}, [], function () {}];

console.log(arr1, arr2, arr3);

let arr4 = [1, 2, 3, 4, 5];
arr4.push(126);
console.log(arr4);
console.log(arr4.length);

for (let i = 1; i <= 10; i++) {
  // 반복 수행할 명령
  console.log("chelseashin");
}

for (let i = 0; i <= arr4.length; i++) {
  // 반복 수행할 명령
  console.log(arr4[i]);
}

let chelsea = {
  name: "scw",
  age: 28,
  tall: 169,
};

const chelseaKeys = Object.keys(chelsea); // 객체에서 키 값만 가져오기
const chelseaVals = Object.values(chelsea); // 객체에서 value 값만 가져오기
console.log(chelseaKeys, chelseaVals);

for (let i = 0; i < chelseaKeys.length; i++) {
  const curKey = chelseaKeys[i];
  const curVal = chelsea[curKey];
  console.log(`${curKey}: ${curVal}`);
}

arr4.forEach((elm) => console.log(elm));
// forEach: 배열의 모든 요소를 한 번씩 순회할 수 있도록 해주는 내장함수
arr4.forEach(function (elm) {
  console.log(elm * 2);
});

const arr5 = [];
arr4.forEach((elm) => arr5.push(elm * 2));
console.log("arr5: ", arr5);
// 위와 같은 결과

const arr6 = [];
arr5.forEach(function (elm) {
  arr6.push(elm * 3);
});
console.log("arr6: ", arr6);

// map: 배열의 내장함수로 콜백함수를 수행하여 리턴하는 함수
const arr7 = arr5.map((elm) => {
  return elm * 2;
});

console.log("arr7: ", arr7);

// 해당 숫자가 배열에 있는지 확인하는 함수
let number = 3;
const array = [1, 2, 3, 4, 5];

array.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  }
});

// 위 내용을 한 줄로
console.log(array.includes(number)); // true
console.log(array.includes("3")); // true
console.log(array.indexOf(number)); // 몇 번째 요소인지: 2
console.log(array.indexOf("3")); // -1

const colors = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

console.log("=================");
console.log(colors.findIndex((elm) => elm.color === "red")); // 0
console.log(colors.findIndex((elm) => elm.color === "green")); // -1 (없을 때)
console.log(colors.findIndex((elm) => elm.color === "yellow")); // -1 (있을 때 인덱스)

// 위와 같은 내용
console.log(
  colors.findIndex((elm) => {
    return elm.color === "blue";
  }),
);

const element = colors.find((elm) => {
  return elm.color === "yellow";
});
console.log(element);

const colorsInfo = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "yellow" },
  { num: 4, color: "green" },
];

console.log(colorsInfo.filter((elm) => elm.color === "red"));
// 배열 나누기
console.log(colorsInfo.slice(0, 2));

// 배열 합치기
console.log(colors.concat(colorsInfo));

// 배열의 순서 정렬
let chars = ["라", "마", "가", "다", "나"];
console.log(chars.sort());

// 완벽하게 정렬이 되지 않음
let numbers = [1, 4, 6, 3, 5, 7, 10, 20, 402, 283];
numbers.sort();
console.log(numbers);

// 따로 비교를 통한 숫자 정렬함수 만들어보기: 비교음수
const compare = (a, b) => {
  // 1. 같다
  // 2. 크다
  // 3. 작다

  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  // 같다
  return 0;
};
numbers.sort(compare);
console.log("numbers >>>", numbers);

const arr8 = ["안녕", "나는", "채원", "이라구", "한단다", "ㅎㅎ"];
console.log(arr8.join(" "));
console.log(arr8.join("123456"));

// 함수
const getName = (person) => {
  return person.name;
};

const pname = getName(person2);
console.log("pname >>>", pname);

// 삼항연산자
let numC = -5;
numC >= 0 ? console.log("양수") : console.log("음수");

let Lst = [54, 123];
Lst.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

const arrayStatus = Lst.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

let s; // undefine => false

const result = s ? true : false;
console.log(result);

// 학점 계산 프로그램
// 90점 이상 A+ , 50점 이상 B+, 나머지는 F
let score = 60;
score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

// 이럴 경우는 가독성을 위해 그냥 if - else if 를 권장

// spread 연산자
const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chococookie = {
  ...cookie,
};

// 동기 & 비동기
// 비동기 방식: 2초 뒤에 A Task 실행
function taskA() {
  setTimeout(() => {
    console.log("A TASK END");
  }, 1000);
}

function taskB(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 2000);
}

taskA();

taskB(5, 4, (res) => {
  console.log("A Task Result : ", res);
});
console.log("B 태스크 끝");
console.log("코드 끝");

console.log("##### Promise - 콜백지옥에서 탈출하기 ######");
// pending(대기상태)
// 해결(resolve)되면, Fulfilled(성공)
// 거부(reject)되면, Rejected(실패)

// 받은 인자가 음수인지 양수인지 반환하는 함수
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number > 0 ? "양수" : number < 0 ? "음수" : "0입니다.");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

// isPositive(
//   -8,
//   (res) => {
//     console.log("성공적으로 수행됨: ", res);
//   },
//   (err) => {
//     console.log("실패하였음", err);
//   },
// );

// Promise로 비동기 작업 해보기
// resolve: 비동기 작업 성공했을 때,
// executor: 비동기 작업 실패했을 때
function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // executor: 실행자 - 비동기 함수를 실질적으로 수행하는 함수
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log("number >>", number);
        resolve(number > 0 ? "양수" : number < 0 ? "음수" : "0입니다.");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 1000);
  };
  // promise 객체 생성
  const asyncTask = new Promise(executor);
  return asyncTask; // promise 객체 반환
}

const res = isPositiveP(546);
// Promise 객체의 메서드
res
  .then((res) => {
    console.log("작업 성공 >>", res);
  })
  .catch((err) => {
    console.log("작업 실패 >>", err);
  });

// 1초 뒤에 더하기, 2초 뒤에 곱하기
function taskC(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskD(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskE(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// 호출부
//taskC(3, 4, (a_res) => {
//  console.log("taskC  a_res: ", a_res);
//  taskD(a_res, (b_res) => {
//    console.log("taskD b_res:", b_res);
//    taskE(b_res, (c_res) => {
//      console.log("taskE c_res", c_res);
//    });
//  });
//});

// 위 호출부와 같으나, Promise 호출방식으로 바꾼 것
//taskC(5, 7).then((c_res) => {
//  console.log("C Result >> ", c_res);
//  taskD(c_res).then((d_res) => {
//    console.log("D Result >>", d_res);
//    taskE(d_res).then((e_res) => {
//      console.log("E Result >>", e_res);
//    });
//  });
//});

// 더 가독성 있고 깔끔한 비동기 처리 방식
taskC(7, 9)
  .then((c_res) => {
    console.log("C_RESULT: ", c_res);
    return taskD(c_res);
  })
  .then((d_res) => {
    console.log("D_RESULT: ", d_res);
    return taskE(d_res);
  })
  .then((e_res) => {
    console.log("E_RESULT: ", e_res);
  });

// Async & await - 직관적인 비동기 처리코드 작성하기
// Async: promise처럼 비동기를 도와주고, promise 객체를 더 쉽게 이용할 수 있도록 도와줌

// 해당 시간만큼 대기하는 함수
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
// async를 쓰면 프로미스 객체가 됨.
// 아래 코드가 너무 거창하게 기니까 >> await을 이용해서 간단히 바꾸기
async function greetingAsync() {
  return delay(3000).then(() => {
    return "hello Async";
  });
}
// await 사용: await는 async 함수 내에서만 사용 가능함!!!
async function greetingAsync2() {
  await delay(5000); // await 뒤부터는 모두 동기적으로 수행.
  return "hello async await";
}

//console.log(greeting());
//console.log(greetingAsync());

//greetingAsync2().then((res) => {
//  console.log("await 사용 >>>>>>", res);
//});

async function main() {
  console.log("##### Async & await - 직관적인 비동기 처리코드 작성하기 ######");
  const res = await greetingAsync2();
  console.log("<< await 쓴 res 확인 >>", res);
}

main();

// API 호출

// fetch: 비동기처리함수이므로, then으로 사용 가능
// let response = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (res) => {
//     console.log(res);
//   },
// );

// json 데이터 가져오는 함수 구현
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
