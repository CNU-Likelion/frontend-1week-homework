function solution(my_string, n) {
    var answer = '';
    // my_string의 각 문자에 대해 반복
    for (var i = 0; i < my_string.length; i++) {
        // 현재 문자를 n번 반복하여 answer에 추가
        answer += my_string[i].repeat(n);
    }
    return answer;
}


//repeat메서드
// .repeat(n) 메서드는 문자열의 현재 문자(my_string[i])를 n번 반복하는 데 사용