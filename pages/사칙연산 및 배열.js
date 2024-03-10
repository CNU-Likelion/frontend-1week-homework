//숫자 비교하기 
function solution(num1, num2) {
    var answer = 0;
    if (num1!=num2) {
        answer=-1;
    }
    else {
        answer=1;}
    return answer;
}

//베열 두 배 만들기
function solution(numbers) {
    var answer = [];
    var numbersLength = numbers.length
    
    for ( i=0; i<numbersLength; i++) {
        numbersTwo = numbers[i]*2
        answer.push(numbersTwo) //answer 배열에 넣어주는거임!!
    }
    return answer;
}

//중앙값 구하기 -> 코드 실행할 땐 괜찮은데 채점했을 때는 틀림,,
function solution(array) {
    var answer = 0;
    array.sort(); //배열 오름차순으로 정렬
    var middleValue = array.length
    var middle_Rest = middleValue%2
    if (middle_Rest !== 0) {
         middleValue = Math.floor(middleValue/2)
         answer = array[middleValue]
    } else {
        console.log ("다시입력")
    }
    return answer;
}

//최빈값 구하기


//배열의 평균값
function solution(numbers) {
    var answer = 0;
    var total = 0;
    for (i=0; i<numbers.length; i++){
        total += numbers[i]
    }
    answer = total/numbers.length
    return answer;
}

//배열 뒤집기
function solution(num_list) {
    var answer = [];
    var reverse_List = num_list.reverse();
    answer = reverse_List
    return answer;
}

//문자 반복 출력하기
function solution(my_string, n) {
    var answer = '';
    for (i=0; i<my_string.length; i++) {
        str=my_string.charAt(i)
        answer+=str.repeat(n)
    }
    return answer;
}

//배열 자르기
function solution(numbers, num1, num2) {
    var answer = [];
    answer = numbers.slice(num1,num2+1)
    return answer;
}