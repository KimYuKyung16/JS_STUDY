process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0;i<b;i++){
        let str = '';
        for(let j=0;j<a;j++){
            str = str+'*'
        }console.log(str)
    }
});

// 정확성  테스트
// 테스트 1 〉	통과 (42.63ms, 31.9MB)
// 테스트 2 〉	통과 (59.58ms, 32.1MB)
// 테스트 3 〉	통과 (42.20ms, 32MB)
// 테스트 4 〉	통과 (42.25ms, 32MB)
// 테스트 5 〉	통과 (42.16ms, 32MB)
// 테스트 6 〉	통과 (59.99ms, 31.9MB)
// 테스트 7 〉	통과 (47.09ms, 32.1MB)
// 테스트 8 〉	통과 (44.49ms, 32.9MB)
// 테스트 9 〉	통과 (53.80ms, 36.9MB)
// 테스트 10 〉	통과 (49.59ms, 32.4MB)
// 테스트 11 〉	통과 (47.79ms, 36.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0