function solution(array) {
    var n = Math.floor(array.length/2);
    var new_arr = array.sort((a,b) => a-b);
    return new_arr[n];
}