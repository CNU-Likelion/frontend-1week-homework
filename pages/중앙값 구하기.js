function solution(array) {
  var mergeArray = array.sort((a,b) => a - b);
  var arrayNum = (array.length - 1) / 2;
  var answer = mergeArray[arrayNum];
  return answer;
}

/*
틀린 이유
- 처음에는 array.sort(); 를 사용함
- sort() 함수는 유니코드 문자로 취급하여 정렬하기 때문에
-> sort((a,b) => a - b); 람다 함수를 사용해야 함 
*/