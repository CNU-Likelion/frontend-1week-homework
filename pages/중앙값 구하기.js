function solution(array) {
  for (var i = 1; i < array.length; i++) {
    var target = array[i];
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > target) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = target;
  }
  var answer = array[(array.length - 1) / 2];
  return answer;
}

/*
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
*/
