function solution(array) {
  const max_value = Math.max(...array);
  const array_count = new Array(max_value + 1).fill(0);
  var max,
    max_i = 0,
    max_count = 0;
  var answer = 0;

  for (var i = 0; i < array.length; i++) {
    array_count[array[i]]++;
  }

  max = array_count[0];
  for (var i = 1; i < array_count.length; i++) {
    if (array_count[i] > max) {
      max = array_count[i];
    }
  }

  for (var i = 0; i < array_count.length; i++) {
    if (array_count[i] == max) {
      max_count++;
      max_i = i;
    }
  }

  if (max_count == 1) {
    answer = max_i;
  } else {
    answer = -1;
  }

  return answer;
}
