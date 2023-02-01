let answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {

   let answer = [];

    const man1 = [1, 2, 3, 4, 5];
    const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === man1[i % man1.length]) score[0]++;
        if (answers[i] === man2[i % man2.length]) score[1]++;
        if (answers[i] === man3[i % man3.length]) score[2]++;
    }

    const max = Math.max(...score);

    for (let i = 0; i < score.length; i++) {
        if (max === score[i]) answer.push(i + 1);
    }

    return answer;
}

console.log(solution(answers));

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.7MB)
// 테스트 2 〉	통과 (0.02ms, 33.7MB)
// 테스트 3 〉	통과 (0.03ms, 33.7MB)
// 테스트 4 〉	통과 (0.02ms, 33.7MB)
// 테스트 5 〉	통과 (0.03ms, 33.8MB)
// 테스트 6 〉	통과 (0.03ms, 33.8MB)
// 테스트 7 〉	통과 (0.53ms, 33.7MB)
// 테스트 8 〉	통과 (0.20ms, 33.8MB)
// 테스트 9 〉	통과 (3.98ms, 37.1MB)
// 테스트 10 〉	통과 (0.47ms, 33.7MB)
// 테스트 11 〉	통과 (3.90ms, 37.1MB)
// 테스트 12 〉	통과 (3.98ms, 37.1MB)
// 테스트 13 〉	통과 (0.08ms, 33.7MB)
// 테스트 14 〉	통과 (3.98ms, 37.2MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0