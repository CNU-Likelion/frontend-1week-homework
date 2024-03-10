const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    for(var i=1; i<=n; i++){
        process.stdout.write(str); //줄바꿈 없이 출력하는 법
    }
});