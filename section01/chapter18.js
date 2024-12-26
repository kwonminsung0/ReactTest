//1단계 음식을 만들어달라고 주문하는 상황
function orderFood(food, callback) {
  console.log(food + "음식주문");
  setTimeout(() => {
    callback(food);
  }, 3000);
}
//1단계 음식을 차게 주문하는 상황
function coolFood(food, callback) {
  console.log(food + "음식 차갑게 주문");
  setTimeout(() => {
    callback(food);
  }, 2000);
}
//1단계 음식을 냉동 주문하는 상황
function freezeFood(food, callback) {
  console.log(food + "음식 냉동 주문");
  setTimeout(() => {
    callback(food);
  }, 3000);
}

// //2단계 음식을 주문하고 => 음식을 차갑게 주문하는 상황
// orderFood("오리백숙", (food) => {
//   console.log(food + "음식제작 3초후 완성");
//   let food2 = `뜨거운 ${food}`;
//   coolFood(food2, (food2) => {
//     console.log(food2 + "음식 차갑게 2초후 완성");
//   });
// });

//3단계 음식을 주문하고 => 음식을 차갑게 주문하는 상황 => 냉동 주문하는 상황황
orderFood("오리백숙", (food) => {
  console.log(food + "음식제작 3초후 완성");
  let food2 = `뜨거운 ${food}`;
  coolFood(food2, (food2) => {
    console.log(food2 + "음식 차갑게 2초후 완성");
    let food3 = `차가운 ${food2}`;
    freezeFood(food3, (food3) => {
      console.log(food3 + "음식냉동 3초후 완성");
    });
  });
});

// orderFood("떡볶이", (food) => {
//   console.log(food + "음식제작 3초후후 완성");
// });

// coolFood("떡볶이", (food) => {
//   console.log(food + "음식 차갑게 2초후후 완성");
// });
// freezeFood("떡볶이", (food) => {
//   console.log(food + "음식냉동 3초후 완성");
// });
