function solution(arr, divisor) {
    var array=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor===0){
            array.push(arr[i]);
        }
    }
    if(array.length===0){
        array.push(-1);
        return array;
    }else{
        return array.sort((a,b)=>a-b);
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.27ms, 33.5MB)
// 테스트 4 〉	통과 (0.14ms, 33.4MB)
// 테스트 5 〉	통과 (0.20ms, 33.5MB)
// 테스트 6 〉	통과 (1.94ms, 38.1MB)
// 테스트 7 〉	통과 (0.36ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.19ms, 33.5MB)
// 테스트 10 〉	통과 (0.23ms, 33.6MB)
// 테스트 11 〉	통과 (0.16ms, 33.5MB)
// 테스트 12 〉	통과 (0.18ms, 33.6MB)
// 테스트 13 〉	통과 (0.26ms, 33.7MB)
// 테스트 14 〉	통과 (0.25ms, 33.5MB)
// 테스트 15 〉	통과 (0.30ms, 33.5MB)
// 테스트 16 〉	통과 (0.15ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0