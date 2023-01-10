process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer = '';
    
    for (let i=0; i<b; i++) {
        answer += '*'.repeat(a) + '\n';
    }

    console.log(answer);
});

/*
정확성  테스트
테스트 1 〉	통과 (42.22ms, 31.9MB)
테스트 2 〉	통과 (46.01ms, 32MB)
테스트 3 〉	통과 (42.72ms, 31.9MB)
테스트 4 〉	통과 (42.35ms, 32MB)
테스트 5 〉	통과 (43.46ms, 31.9MB)
테스트 6 〉	통과 (43.11ms, 31.9MB)
테스트 7 〉	통과 (40.73ms, 32MB)
테스트 8 〉	통과 (40.91ms, 32.1MB)
테스트 9 〉	통과 (42.13ms, 32.1MB)
테스트 10 〉	통과 (41.29ms, 31.9MB)
테스트 11 〉	통과 (40.05ms, 32.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/