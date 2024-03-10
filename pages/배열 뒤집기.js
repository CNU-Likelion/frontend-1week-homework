function solution(num_list) {
  var temp = 0;

  for (var i = 0; i < num_list.length / 2; i++) {
    temp = num_list[i];
    num_list[i] = num_list[num_list.length - 1 - i];
    num_list[num_list.length - 1 - i] = temp;
  }

  return num_list;
}

/*
function solution(num_list) {
    return num_list.reverse()
}
*/
