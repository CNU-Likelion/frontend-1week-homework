function solution(numbers) {
  var answer = 0;
  var sum = 0,
    avg = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  answer = sum / numbers.length;

  return answer;
}
