function solution(n) {
    var i=0;
    var answer = [];    //빈 배열 생성
    for(i=0;i<=n;i++){  //0부터 n까지 반복
        if(n%i==0){     
            answer.push(i);     //n을 i로 나눴을때 나머지가 0이 되는 수를 따로 추출해서 빈배열에 추가
        }
    }
    var hap = answer.reduce((a,b)=>a+b,0);    //배열들을 하나씩 더한다.
    return hap;
}