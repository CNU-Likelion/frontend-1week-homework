function solution(num_list) {
    var answer = [];
    
    let j=0;
    for(var i=num_list.length-1; i>=0; i--){
        answer[j++]=num_list[i];
    }
    return answer;
}