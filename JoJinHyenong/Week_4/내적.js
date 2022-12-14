function solution(a, b) {
    const array = a.map((item,index)=>{
        return item*b[index];       //각각의 배열들을 더해서 값을 바꾼다.
    })
    return array.reduce((a,b)=>a+b)
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.6MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.16ms, 33.6MB)
// 테스트 7 〉	통과 (0.10ms, 33.5MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0