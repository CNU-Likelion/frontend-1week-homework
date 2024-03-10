**형변환**
*실수를 정수로 형변환*

- parseInt() 함수를 통해 형변환 가능

**출력 (- 문자열 포맷팅)**
- 문자열 속 특정한 위치에 특정한 값을 삽입해 주는 것
- 백틱 (`) 안에 ${변수명} 을 넣어 변수를 사용할 수 있음

**줄바꿈없이 출력**
- console.log()로 데이터를 출력하면 개행문자가 포함되어 출력
- 개행 문자없이 데이터를 출력하고 싶다면
- process.stdout.write()를 사용
var text1 = 'A';
var text2 = 'B';
process.stdout.write(text1);
process.stdout.write(text2);

**repeat() 메서드**
- 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 출력

**sort() 함수**
- 배열 안에 있는 것들을 유니코드 문자로 취급하여 정렬함

**배열에서 최대값**
- Math.max(...arr) 을 사용
- spread 연산자 사용
- Math.max() : 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환

**indexOf()**
- 배열 속에서 원하는 값을 찾고 싶을 때 사용
- 찾은 값의 첫번째 원소의 위치를 반환, 없을 경우 -1 return

**includes()**
- true, false 로 return

**Math.round()**
- 반올림 함수 