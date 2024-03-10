function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

// 시간이 부족해 이 문제만 오류를 해결하지 못했습니다.
