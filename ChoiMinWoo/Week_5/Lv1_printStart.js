process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    for (var j = 0; j < b; j++) {
        for (var i = 0; i < a; i++) {
            process.stdout.write("*");
        }
        console.log();
    }
});

// 정확성  테스트
// 테스트 1 〉	통과 (60.53ms, 32.1MB)
// 테스트 2 〉	통과 (58.40ms, 32.1MB)
// 테스트 3 〉	통과 (51.08ms, 32.1MB)
// 테스트 4 〉	통과 (52.68ms, 32MB)
// 테스트 5 〉	통과 (56.69ms, 32MB)
// 테스트 6 〉	통과 (41.00ms, 32MB)
// 테스트 7 〉	통과 (43.47ms, 32.2MB)
// 테스트 8 〉	통과 (100.83ms, 39MB)
// 테스트 9 〉	통과 (177.69ms, 38.5MB)
// 테스트 10 〉	통과 (70.80ms, 37.8MB)
// 테스트 11 〉	통과 (103.86ms, 38.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
