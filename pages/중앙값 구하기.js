function solution(array) {
    const medianIndex = Math.floor(array.length / 2);
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[medianIndex];
}
