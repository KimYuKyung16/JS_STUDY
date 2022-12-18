function solution(n) {
    a = String(n).split('');    // 배열로 생성
    a.sort(function(a,b){       // 내림차순
        return b-a;
    });
   return Number(a.join(''));
}