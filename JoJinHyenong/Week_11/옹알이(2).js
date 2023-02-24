function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    for(let i=0;i<babbling.length;i++){
        for(let j=0;j<can.length;j++){
            babbling[i] = babbling[i].replace(can[j]," ");
            babbling[i] = babbling[i].replace(/(^\s*)|(\s*$)/gi, "");
        }
    }
    return babbling.filter(item=>item==='').length;
    // console.log(babbling.filter(item => item!==undefined))
}

// 이중 공백 해결 못함

// 정확성  테스트
// 테스트 1 〉	실패 (0.24ms, 33.5MB)
// 테스트 2 〉	통과 (0.23ms, 33.5MB)
// 테스트 3 〉	통과 (0.24ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.6MB)
// 테스트 5 〉	통과 (0.25ms, 33.5MB)
// 테스트 6 〉	통과 (0.24ms, 33.5MB)
// 테스트 7 〉	통과 (0.25ms, 33.5MB)
// 테스트 8 〉	통과 (0.23ms, 33.7MB)
// 테스트 9 〉	통과 (0.26ms, 33.5MB)
// 테스트 10 〉	통과 (0.25ms, 33.4MB)
// 테스트 11 〉	실패 (0.36ms, 33.6MB)
// 테스트 12 〉	통과 (0.43ms, 33.6MB)
// 테스트 13 〉	통과 (0.51ms, 33.5MB)
// 테스트 14 〉	실패 (0.45ms, 33.5MB)
// 테스트 15 〉	통과 (0.55ms, 33.6MB)
// 테스트 16 〉	실패 (0.63ms, 33.6MB)
// 테스트 17 〉	실패 (0.69ms, 33.6MB)
// 테스트 18 〉	통과 (0.48ms, 33.6MB)
// 테스트 19 〉	통과 (0.43ms, 33.4MB)
// 테스트 20 〉	통과 (0.33ms, 33.5MB)
// 채점 결과
// 정확성: 75.0
// 합계: 75.0 / 100.0