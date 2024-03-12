function solution(balls, share) {
    if (share > 15)
        share = 30 - share;
    
    var sol1 = 1;
    var sol2 = 1;
    
    for( var i = share; i > 0; i--)
        {
            sol1 = sol1*balls;
            balls--;
            
            sol2 = sol2*i
        }
    return sol1/sol2;
}