function solution(rsp) {
  var answer = '';
  var rspArray = [...rsp];
  var answerArray = [];
  for (var i=0; i<rsp.length; i++) {
      switch (rspArray[i]) {
          case '2' : 
              answerArray.push('0'); 
              break;
          case '0' :
              answerArray.push('5');
              break;
          case '5' :
              answerArray.push('2');
              break;
      }
  }
  answer = answerArray.join('');
  return answer;
}