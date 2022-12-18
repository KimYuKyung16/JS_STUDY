function solution(x) {
    a = String(x).split('');    // 배열로 변환
    b = a.reduce((a,b)=>Number(a)+Number(b));   // 각 자리수를 더한다.
    return x%b===0?true:false;    
}