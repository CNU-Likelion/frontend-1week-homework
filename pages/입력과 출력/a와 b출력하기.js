const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // Number 함수를 사용하여 문자열을 숫자로 변환 후 변수에 할당
    let a = Number(input[0]);
    let b = Number(input[1]);
    // 요청한 출력 형식에 맞게 수정
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
});