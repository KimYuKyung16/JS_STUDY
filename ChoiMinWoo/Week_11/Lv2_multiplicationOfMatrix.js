function solution(arr1, arr2) {
    let answer = [];
    arr1.forEach((row) => answer.push(Array(arr2[0].length).fill(0)));
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (4.44ms, 35.8MB)
// 테스트 2 〉	통과 (6.13ms, 38.9MB)
// 테스트 3 〉	통과 (11.74ms, 37.6MB)
// 테스트 4 〉	통과 (4.43ms, 37MB)
// 테스트 5 〉	통과 (5.80ms, 38.7MB)
// 테스트 6 〉	통과 (4.39ms, 38.6MB)
// 테스트 7 〉	통과 (4.21ms, 36.6MB)
// 테스트 8 〉	통과 (0.82ms, 33.8MB)
// 테스트 9 〉	통과 (0.73ms, 33.8MB)
// 테스트 10 〉	통과 (6.09ms, 38.6MB)
// 테스트 11 〉	통과 (3.09ms, 37.2MB)
// 테스트 12 〉	통과 (0.93ms, 33.8MB)
// 테스트 13 〉	통과 (5.39ms, 38.8MB)
// 테스트 14 〉	통과 (6.68ms, 39MB)
// 테스트 15 〉	통과 (3.65ms, 37.1MB)
// 테스트 16 〉	통과 (3.01ms, 38.1MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
