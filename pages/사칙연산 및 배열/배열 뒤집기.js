function solution(num_list) {
    let answer = []; // 순서가 뒤집힌 원소를 저장할 배열 초기화
    let length = num_list.length; // 주어진 배열의 길이 계산

    // 주어진 배열의 마지막 원소부터 시작하여 첫 번째 원소까지 반복
    for(let i = 0; i < length; i++) {
        answer.push(num_list[length - 1 - i]);
    }

    return answer; // 뒤집힌 배열 반환
}
