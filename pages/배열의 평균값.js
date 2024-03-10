function solution(numbers) {
  var sumAll = 0;
  for (var i=0; i<numbers.length; i++) {
      sumAll += numbers[i];
  }
  var answer = sumAll/numbers.length;
  return answer;
}