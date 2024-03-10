function solution(num_list) {
    let res = [];
    for (let i = num_list.length-1; i >= 0; i--) {
        res.push(num_list[i]);
    }
    return res;
}