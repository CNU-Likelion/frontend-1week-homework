const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line]; // 사용자로부터 받은 한 줄을 배열의 첫 번째 요소로 저장
}).on('close', function(){
    let str = input[0]; // 배열에서 문자열을 꺼내어 사용
    console.log(str);
});


// Node.js readline사용
// readline사용하기

// 1. 모듈 불러오기
// const readline = require("readline");
// require 메서드를 이용, 외부 모듈인 readline을 가져온다.
// 2. readline 인터페이스 생성
// const rl = readline.createInterface({
// 	input : process.stdin,
// 	output : process.stdout,
// })
// readline의  createInterface 메서드를 이용하여 readline.Interface인스턴스를 생성한다. 
// input과 output을 지정해줌
// 3.입출력 처리하기
// rl.on("line",(line) => {
// /*입력값 처리 코드*/
// rl.close();
// });
// rl.on("close", () => {
//   	/*입력 이후 실행 코드*/
// 	process.exit();
// });

