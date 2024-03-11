function solution(rsp) {
    var answer = [];
    var array = rsp.split('');
    for(let i = 0; i<rsp.length; i++)
        {
            switch(array[i])
                {
                        case'2':
                        answer.push('0');
                        break;
                        
                        case'0':
                        answer.push('5');
                        break;
                        
                        case'5':
                        answer.push('2');
                        break;
                }
        }
    return answer.join('');
}