function solution(n) {
    var array=[];
    for(let i=0;i<n;i++){
        if(n%i==1){     // 나머지가 1이되는 i값 구하기
            array.push(i);  // 빈 배열에 i추가
        }
    }
    return array[0];    // 제일 첫번째 배열 리턴
}