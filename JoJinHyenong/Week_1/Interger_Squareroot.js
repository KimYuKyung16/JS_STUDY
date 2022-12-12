function solution(n) {
    var a = Math.sqrt(n);   //제곱근을 구한다.
    if(a%1===0){            
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1);       //만약 그 제곱근이 양수이면 (제곱근+1)을 제곱한 값 출력
    }else{
        return -1;                                      // 아니면 -1 출력
    }
}