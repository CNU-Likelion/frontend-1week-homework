function solution(my_string, n) {
  var answer = '';
  const strArray = [...my_string];
  for (var i=0; i<strArray.length; i++) {
      for (var j=0; j<n; j++) {
          answer += strArray[i];
      }
  }
  return answer;
}