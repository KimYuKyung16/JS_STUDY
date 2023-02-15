function solution(n, lost, reserve) {
    let answer = 0;
    let hasUniform = new Array(n).fill(1);

    for (let i = 0; i < lost.length; i++) {
        hasUniform[lost[i] - 1]--;
    }
    for (let i = 0; i < reserve.length; i++) {
        hasUniform[reserve[i] - 1]++;
    }
    for (let i = 0; i < hasUniform.length; i++) {
        if (hasUniform[i] === 0) {
            if (hasUniform[i - 1] === 2) {
                hasUniform[i]++;
                hasUniform[i - 1]--;
            } else if (hasUniform[i + 1] === 2) {
                hasUniform[i]++;
                hasUniform[i + 1]--;
            }
        }

        if (hasUniform[i] >= 1) {
            answer++;
        }
    }

    return answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (3.00ms, 33.5MB)
// 테스트 2 〉	통과 (3.23ms, 33.5MB)
// 테스트 3 〉	통과 (3.19ms, 33.6MB)
// 테스트 4 〉	통과 (3.22ms, 33.5MB)
// 테스트 5 〉	통과 (4.55ms, 33.7MB)
// 테스트 6 〉	통과 (2.86ms, 33.5MB)
// 테스트 7 〉	통과 (3.27ms, 33.5MB)
// 테스트 8 〉	통과 (3.20ms, 33.5MB)
// 테스트 9 〉	통과 (3.14ms, 33.5MB)
// 테스트 10 〉	통과 (3.23ms, 33.5MB)
// 테스트 11 〉	통과 (2.84ms, 33.5MB)
// 테스트 12 〉	통과 (2.84ms, 33.6MB)
// 테스트 13 〉	통과 (2.88ms, 33.6MB)
// 테스트 14 〉	통과 (2.86ms, 33.5MB)
// 테스트 15 〉	통과 (3.00ms, 33.5MB)
// 테스트 16 〉	통과 (2.96ms, 33.4MB)
// 테스트 17 〉	통과 (2.96ms, 33.5MB)
// 테스트 18 〉	통과 (3.02ms, 33.5MB)
// 테스트 19 〉	통과 (3.01ms, 33.5MB)
// 테스트 20 〉	통과 (2.95ms, 33.6MB)
// 테스트 21 〉	통과 (4.69ms, 33.5MB)
// 테스트 22 〉	통과 (3.14ms, 33.5MB)
// 테스트 23 〉	통과 (4.64ms, 33.6MB)
// 테스트 24 〉	통과 (3.03ms, 33.5MB)
// 테스트 25 〉	통과 (3.29ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
