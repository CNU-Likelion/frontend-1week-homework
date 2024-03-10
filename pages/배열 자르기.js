function solution(numbers, num1, num2) {
    var answer = [];
    let j=0;
    for(var i=num1; i<=num2; i++){
        answer[j++] = numbers[i];
    }
    return answer;
}