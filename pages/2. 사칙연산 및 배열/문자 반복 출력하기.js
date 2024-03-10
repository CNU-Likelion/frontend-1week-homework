function solution(my_string, n) {
    var answer = '';
    for(let i =0; i<my_string.length; i++){
        for(let t=0; t<n; t++){
            answer += my_string[i];   
        }
    }
    return answer;
}