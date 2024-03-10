function solution(array) {
  const set = Array.from(new Set(array));
  let res = new Array(set.length);
  for (let i = 0; i < set.length; i++) {
      let count = 0;
      array.map((number) => {
        if (set[i] === number) count++;
      });
      res[i] = count;
  }

  const maxIndex = res.indexOf(Math.max(...res));
  const max = res[maxIndex];
  const maxCount = res.filter((num) => num === max).length;

  if (maxCount > 1) return -1;
  return set[maxIndex];
}