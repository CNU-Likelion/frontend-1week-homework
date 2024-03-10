function solution(hp) {
  var answer = 0;
  if (hp >= 5) {
      while (hp >= 5) {
          hp -= 5;
          answer += 1;
      }
  } 
  if (hp >= 3) {
      while (hp >= 3) {
          hp -= 3;
          answer += 1;
      }
  }
  if (hp >= 1) {
      while (hp >= 1) {
          hp -= 1;
          answer += 1;
      }
  }
  return answer;
}

/*
다른 풀이 
function solution(hp) {
    var answer = 0;
    var answer = parseInt(hp/5) + parseInt((hp%5)/3) + parseInt((hp%5)%3/1)
    return answer;
}
*/