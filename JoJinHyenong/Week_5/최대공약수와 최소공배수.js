function solution(n, m) {
    const array_a = [];
    const array_b = [];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            array_a.push(i)
        }
    }
    for(let i=1;i<=m;i++){
        if(m%i===0){
            array_b.push(i)
        }
    }
    const max = array_a.filter((item,index)=>{
        return array_b.includes(item)
    });
    var a=max[max.length-1]
    return ([max[max.length-1],(n*m)/a])
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.6MB)
// 테스트 3 〉	통과 (0.15ms, 33.5MB)
// 테스트 4 〉	통과 (0.23ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.15ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉	통과 (0.14ms, 33.4MB)
// 테스트 11 〉	통과 (0.21ms, 33.4MB)
// 테스트 12 〉	통과 (0.24ms, 33.4MB)
// 테스트 13 〉	통과 (0.22ms, 33.6MB)
// 테스트 14 〉	통과 (0.23ms, 33.4MB)
// 테스트 15 〉	통과 (0.19ms, 33.4MB)
// 테스트 16 〉	통과 (0.26ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0