function solution(array) {
    array.sort((a, b) => a - b); // 배열을 오름차순으로 정렬
    var index = Math.floor((array.length - 1) / 2); // 중앙값의 인덱스를 계산
    var answer = array[index]; // 중앙값을 찾음
    return answer;
}


//compareFunction 파라미터
// compareFunction을 선언할 경우 sort()함수는 배열의 요소를 2개씩 반복해서 보낸 뒤, compareFunction이 반환하는 값을 기준으로 정렬을 한다.

// a,b로 보낸다하면 a-b

// 음수 a가 b보다 앞

// 0 순서 안바꿈

// 양수 b가 a보다 앞