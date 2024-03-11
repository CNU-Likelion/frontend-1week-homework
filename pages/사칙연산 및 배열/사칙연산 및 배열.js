//숫자 비교하기
function solution(num1, num2) {
    var answer = 0;
    if (num1==num2)
        {
            answer=1;
        }
    else
        {
            answer=-1;
        }
    
    return answer;
}

//배열 두배 만들기
function solution(numbers) {
    var answer = [];
    for(var i=0; i<numbers.length; i++)
    {
        answer.push(2*numbers[i]);
    }
    return answer;
}

//중앙값 구하기

//최빈값 구하기

//배열의 평균값
function solution(numbers) {
    var answer = 0;
    var sum = 0;
    for(var i=0; i<numbers.length; i++)
        {
            sum +=numbers[i];
        }
    answer = sum/(numbers.length);
    return answer;
}

//배열 뒤집기
function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for(var i = 1; i <= j; i++){
        answer.push(num_list[j-i])
    }
    return answer;
}
/*
처음에 이렇게 했는데 왜 안되는지 잘 모르겠습니다,,
function solution(num_list) {
    var answer = [];
    for (var i = num_list.length - 1; i >= 0; i--) {
        answer.push(num_list[i]);
    }
    return answer;
}
 */

//문자 반복 출력하기
function solution(my_string, n) {
    var answer = '';
    for(var i = 0; i<my_string.length; i++)
        {
            for(var j = 1; j<=n; j++)
                {
                    answer += my_string[i];
                }
        }
    return answer;
}

//배열 자르기
function solution(numbers, num1, num2) {
    var answer = [];
    for(var i=num1; i<=num2; i++)
        {
            answer.push(numbers[i]);
        }
    return answer;
}
