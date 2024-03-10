// 정확성 91.4
// 테스트 2, 3, 24 실패

function solution(balls, share) {
  function factorial(n) {
      if (n <= 1) {return 1;}
      return n * factorial(n-1);
  }
  if (balls != share) {
      var answer = factorial(balls) / (factorial(balls-share) * factorial(share));
  }
  return Math.round(answer);
  // return answer
}

console.log(solution(30, 15));