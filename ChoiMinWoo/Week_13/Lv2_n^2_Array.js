//실패

function solution(n, left, right) {
    let nArray = new Array(n);
    let answer = [];
    for (let i = 0; i < n; i++) nArray[i] = new Array(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j > i) nArray[i][j] = j + 1;
            else nArray[i][j] = i + 1;
        }
    }

    return answer.concat(...nArray).slice(left, right + 1);
}

function solution(n, left, right) {
    const ans = [];

    while (left <= right) {
        ans.push(Math.max(Math.floor(left / n), left++ % n) + 1);
    }

    return ans;
}

// 정확성  테스트
// 테스트 1 〉	통과 (4.74ms, 43.7MB)
// 테스트 2 〉	통과 (4.86ms, 50.1MB)
// 테스트 3 〉	통과 (4.93ms, 49.6MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.7MB)
// 테스트 6 〉	통과 (4.89ms, 43.6MB)
// 테스트 7 〉	통과 (4.86ms, 43.8MB)
// 테스트 8 〉	통과 (4.86ms, 43.7MB)
// 테스트 9 〉	통과 (4.83ms, 44.2MB)
// 테스트 10 〉	통과 (4.78ms, 44.6MB)
// 테스트 11 〉	통과 (5.04ms, 44MB)
// 테스트 12 〉	통과 (5.09ms, 46.8MB)
// 테스트 13 〉	통과 (5.18ms, 47.4MB)
// 테스트 14 〉	통과 (5.01ms, 44.5MB)
// 테스트 15 〉	통과 (5.22ms, 50MB)
// 테스트 16 〉	통과 (5.31ms, 50.2MB)
// 테스트 17 〉	통과 (5.37ms, 44.7MB)
// 테스트 18 〉	통과 (5.31ms, 49.7MB)
// 테스트 19 〉	통과 (5.28ms, 50.3MB)
// 테스트 20 〉	통과 (4.98ms, 43.8MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
