//async 일반함수를 비동기 처리하는 함수 리턴값을 promise
async function getData() {
  return { name: "kdj", id: "kdj1234" };
}

//console.log(getData());

//async 일반함수 들어있는 new Promise(); 아무문제없이 promise
async function getData2() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "kdj", id: "kdj1234" });
    }, 2000);
  });
  return promise;
}

//console.log(getData2());

//3. await : async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  getData()
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function printData2() {
  const data = await getData();
  console.log(data);
}

printData2();
