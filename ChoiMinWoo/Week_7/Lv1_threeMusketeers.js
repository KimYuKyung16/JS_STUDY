function solution(number) {
    let answer = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) answer++;
            }
        }
    }
    return answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.21ms, 33.5MB)
// 테스트 2 〉	통과 (0.12ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.5MB)
// 테스트 4 〉	통과 (0.12ms, 33.5MB)
// 테스트 5 〉	통과 (0.12ms, 33.6MB)
// 테스트 6 〉	통과 (0.13ms, 33.6MB)
// 테스트 7 〉	통과 (0.13ms, 33.5MB)
// 테스트 8 〉	통과 (0.13ms, 33.6MB)
// 테스트 9 〉	통과 (0.14ms, 33.4MB)
// 테스트 10 〉	통과 (0.12ms, 33.5MB)
// 테스트 11 〉	통과 (0.13ms, 33.5MB)
// 테스트 12 〉	통과 (0.12ms, 33.5MB)
// 테스트 13 〉	통과 (0.13ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
