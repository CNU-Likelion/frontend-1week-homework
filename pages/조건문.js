//각도기 -> 90이상은 결과값이 다 2가 나와버림ㅠㅠ
function solution(angle) {
    var answer = 0;
    if (0<angle && angle<90) {
        answer = 1;
    }
    else if (angle=90) {
        answer = 2;
    }
    else if (90<angle && angle<180) {
        answer = 3;
    }
    else if (angle=180) {
        answer = 4;
    }
    else {
        console.log ("잘못 입력")
    }
    return answer;
}


//특정 문자 제거
function solution(my_string, letter) {
    var answer = '';
    my_string = my_string.replaceAll(letter,'')
    answer = my_string
    return answer;
}