//1. 배열생성, 배열리터럴
let arrayA = new Array();
let arrayB = [];

//2. 배열에 들어올 수 있는 멤버(기본타입 5가지, 객체타입 1(3종류))
let arrayC = [
  1,
  1.0,
  true,
  "hello",
  undefined,
  null,
  {},
  [],
  () => {
    console.log("나는 함수다.");
  },
];

console.log(arrayC[8]());
