function solution(my_string, n) {
  let res = '';
  for (let i = 0; i < my_string.length; i++) {
      for (let j = 0; j < n; j++) {
          res += my_string[i];
      }
  }
  return res;
}