function solution(my_string, letter) {
  var answer = "";

  for (i = 0; i < my_string.length; i++) {
    if (my_string[i] != letter) {
      answer += my_string.charAt(i);
    }
  }

  return answer;
}

/*
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}
*/
