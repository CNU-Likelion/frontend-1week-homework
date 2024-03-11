//개미 군단
function solution(hp) {
    var answer = 0;
    topAnt = Math.floor(hp/5)
    restAnt = hp%5
    middleAnt = Math.floor(restAnt/3)
    restAntt = restAnt%3
    bottomAnt = restAntt
    answer = topAnt + middleAnt + bottomAnt
    return answer;
}

//가위바위보 -> 가위바위보 결과가 다 0으로만 나옴ㅠ
function solution(rsp) {
    var answer = '';
    rsp=Array.from(rsp) //문자열 배열로 바꿔줌
    var result = [];
    for (i=0; i<rsp.length; i++){
        if (rsp[i]='2') {
            result.push(0)
        } else if (rsp[i]='0') {
            result.push(5)
        } else if (rsp[i]='5'){
            result.push(2)
        }
    }
    answer = result.join('');
    return answer;
}

//구슬을 나누는 경우의 수 -> 68/100 오답이라는데 뭐가 틀린건지 모르겠다ㅏ,,
function solution(balls, share) {
    var answer = 0;
    ball_Fac = balls
    for (i=1; i<balls; i++) {
        ball_Fac = ball_Fac*(balls-i)
    }
    share_Fac = share
    for (x=1; x<share; x++) {
        share_Fac = share_Fac*(share-x)
    }
    nm = balls-share
    nm_Fac = nm
    for (t=1; t<nm; t++) {
        nm_Fac = nm_Fac*(nm-t)
    }
    
    top = ball_Fac
    bottom = share_Fac*nm_Fac
    answer = top / bottom
    return answer;
}