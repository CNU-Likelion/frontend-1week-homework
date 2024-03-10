// 정확성 75.0
// 테스트 2, 3, 11, 13 실패

function solution(array) {
    var answer = 0;
    var arrayNum = [];
    var object = {};
    for (var i=0; i<array.length; i++) {
        if (!arrayNum.includes(array[i])) {
            arrayNum.push(array[i]);
            object[array[i]] = 1;
        } else {
            object[array[i]] += 1;
        }
    }
    var num = Object.values(object);
    var maxNum = Math.max(...num);
    var maxIndex = num.indexOf(maxNum);
    num.splice(maxIndex,1);
    var result = false;
    for (var i=0; i<num; i++) {
        if (maxNum == num[i]) {
            result = true;
        }
    }
    if (result) {
        return -1;
    } else {
        return parseInt(Object.keys(object)[maxIndex]);
    }
}
