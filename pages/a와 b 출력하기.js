const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`); //``(역따옴표) 이용해 문자열 리터럴 생성
                                                                     // ${}를 통해 변수나 표현식을 문자열에 삽입
                                                                     // Number()를 통해 문자열을 숫자로 변환 
});