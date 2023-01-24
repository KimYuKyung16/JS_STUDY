function solution(numbers) {
    let answer = [];
    const uniq = (array) => [...new Set(array)];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    return uniq(answer).sort((a, b) => a - b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.6MB)
// 테스트 6 〉	통과 (0.19ms, 33.4MB)
// 테스트 7 〉	통과 (0.75ms, 33.6MB)
// 테스트 8 〉	통과 (0.54ms, 33.8MB)
// 테스트 9 〉	통과 (0.48ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
