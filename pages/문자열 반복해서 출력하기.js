const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = '';

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    // 문제 풀이
    for (var i=0; i<n; i++) {
        process.stdout.write(str);
    }
});


// 추가 

/*
console.log(str.repeat(n));
도 사용 가능 
*/