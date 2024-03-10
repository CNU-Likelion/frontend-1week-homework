function solution(array) {
    var answer = 0;
    const arr = [];
    for(var i=0; i<1000; i++){
        arr[i]=0;
    }
    
    for(var i=0; i<array.length; i++){
        arr[array[i]] += 1;
    }
    
    var count1=0;
    var count2=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>=1){
            if(count1<arr[i]){
                answer=i;
                count1=arr[i];
                count2=0;
            }
            else if(count1===arr[i]){
                count2+=1;
                answer=-1;
            }
        }
    }
    
    
    return answer;
}