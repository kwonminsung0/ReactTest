//객체순회방법
const person = {
  name: "kdj",
  age: 29,
  tall: 178,
};

console.log(person.name);
console.log(person["name"]);

//객체에서 멤버변수이름을 배열로 가져오기
const personKey = Object.keys(person);
const personValue = Object.values(person);
console.log(personKey);
console.log(personValue);
//반복문을 객체값에 모든 원소값을 출력한다.
for (let i = 0; i < personKey.length; i++) {
  let key = personKey[i];
  console.log(person[key]);
}
