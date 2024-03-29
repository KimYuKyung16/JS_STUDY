function solution(food) {
    let answer = "";
    food.shift();
    for (let i = 0; i < food.length; i++) {
        let a = parseInt(food[i] / 2);
        answer += (i + 1 + "").repeat(a);
    }
    answer += 0;
    for (let i = food.length; i >= 0; i--) {
        let a = parseInt(food[i] / 2);
        answer += (i + 1 + "").repeat(a);
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.6MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.09ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.08ms, 33.5MB)
// 테스트 9 〉	통과 (0.08ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.06ms, 33.4MB)
// 테스트 13 〉	통과 (0.08ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)
// 테스트 15 〉	통과 (0.09ms, 33.5MB)
// 테스트 16 〉	통과 (0.09ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.11ms, 33.6MB)
// 테스트 19 〉	통과 (0.09ms, 33.5MB)
// 테스트 20 〉	통과 (0.09ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
