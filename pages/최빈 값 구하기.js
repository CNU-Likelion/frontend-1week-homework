function solution(array) {
    const frequency = {};
    let maxCount = 0;
    let answer = -1;

    array.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            answer = item;
        }
    });

    const isDuplicate = Object.values(frequency).filter(count => count === maxCount).length > 1;
    
    return isDuplicate ? -1 : answer;
}