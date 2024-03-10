# 1주차 과제 배운 내용

## 문자열 출력

> const readline = require("readline");
> const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

});

let input = [];

rl.on("line", function (line) {
input = [line];
}).on("close", function () {
str = input[0];
});

## 문자열 다루기

- 반복 출력

  > str.repeat(n)

- 추출

  > str.charAt(i)

- 제거
  > string.split(letter)

## 배열 뒤집기

> list.reverse()

## 배열 정렬하기

array.sort((a, b) => a - b)[Math.floor(array.length / 2)]

## 정수 반환

- 주어진 수 이하의 가장 큰 정수

  > Math.floor()

- 주어진 수보다 크거나 같은 가장 작은 정수
  > Math.ceil()
