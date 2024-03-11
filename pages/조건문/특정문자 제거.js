//특정문자 제거
function solution(my_string, letter) {
    var answer = '';
    my_string = my_string.replaceAll(letter,'')
    answer = my_string
    return answer;
}