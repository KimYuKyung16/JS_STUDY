function solution(lottos, win_nums) {
    let answer = [];
    let count = 0;
    lottos = lottos.filter((a) => a !== 0);
    let a = 6 - lottos.length;
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) count++;
    }
    switch (count) {
        case 6:
            count = 1;
            break;
        case 5:
            count = 2;
            break;
        case 4:
            count = 3;
            break;
        case 3:
            count = 4;
            break;
        case 2:
            count = 5;
            break;
        default:
            count = 6;
            break;
    }
    return [lottos.length ? count - a : 1, count];
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.6MB)
// 테스트 8 〉	통과 (0.11ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.6MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)
// 테스트 14 〉	통과 (0.07ms, 33.5MB)
// 테스트 15 〉	통과 (0.10ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
