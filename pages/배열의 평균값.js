function solution(numbers) {
  let res = 0;
  numbers.map((num) => res += num);
  return res/numbers.length;
}