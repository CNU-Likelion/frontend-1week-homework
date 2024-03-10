function solution(numbers, num1, num2) {
    // .slice() 메서드를 사용, 
    //num1부터 num2까지의 요소를 포함하는 새 배열 반환
    var answer = numbers.slice(num1, num2 + 1);
    return answer;
}
