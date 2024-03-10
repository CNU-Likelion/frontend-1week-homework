function solution(my_string, letter) {
  var answer = '';
  let strArray = [...my_string];
  let answerArray = [...my_string];
  for(var i=0; i<strArray.length; i++) {
      if (strArray[i] == letter) {
          answerArray.splice(i,1,'');
      }
  }
  answer = answerArray.join('');
  return answer;
}


/*
틀린 이유
answerArray.splice(i,1) 로 answerArray 의 길이가 줄어들지만
strArray 의 길이는 줄어들지 않음 
그래서 strArray 의 i번째에서 letter 와 같은 문자가 나와도 
이미 문자가 제거된 answerArray 에서는 엉뚱한 문자가 제거됨

answerArray.splice(i,1); 을 
-> answerArray.splice(i,1,''); 로 바꿈 (정답)
*/

/*
다른 사람 풀이
function solution (my_string, letter) {
  const answer = my_string.split(letter).join(');
  return answer;
}
-> 제거할 문자를 구분자로 이용하여 제거함 
*/