function solution(hp) {
    let answer = 0;
    while(hp){
        if(hp>=5){
        hp-=5;
            answer++;
        }
        else if(hp>=3){
            hp-=3;
            answer++;
        }
        else{
            hp-=1;
            answer++;
        }
    }
    
    return answer;
}