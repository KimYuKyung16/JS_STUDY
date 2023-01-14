function solution(s, n) {
    let lower = "abcdefghijklmnopqrstuvwxyz".repeat(2);
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".repeat(2);
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") answer += " ";
        else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
            let newIndex = lower.indexOf(s[i]) + n;
            answer += lower.charAt(newIndex);
        } else if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            let newIndex = upper.indexOf(s[i]) + n;
            answer += upper.charAt(newIndex);
        }
    }
    return answer;
}
// 정확성  테스트
// 테스트 1 〉	통과 (2.18ms, 33.6MB)
// 테스트 2 〉	통과 (2.17ms, 33.5MB)
// 테스트 3 〉	통과 (2.31ms, 33.5MB)
// 테스트 4 〉	통과 (2.17ms, 33.5MB)
// 테스트 5 〉	통과 (2.18ms, 33.6MB)
// 테스트 6 〉	통과 (2.27ms, 33.6MB)
// 테스트 7 〉	통과 (2.27ms, 33.6MB)
// 테스트 8 〉	통과 (2.15ms, 33.6MB)
// 테스트 9 〉	통과 (2.26ms, 33.6MB)
// 테스트 10 〉	통과 (2.19ms, 33.6MB)
// 테스트 11 〉	통과 (2.25ms, 33.6MB)
// 테스트 12 〉	통과 (2.32ms, 33.7MB)
// 테스트 13 〉	통과 (9.57ms, 38.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
