function solution(numbers) {
    let sum = 0;
    numbers.forEach(function(number){
        sum += number;
    });
    
    let result = sum/numbers.length;
    
    return result
}