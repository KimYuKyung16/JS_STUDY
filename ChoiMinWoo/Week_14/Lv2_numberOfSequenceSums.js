function solution(elements) {
    let answer = [...elements];

    for (let i = 0; i < elements.length; i++) {
        //elements의 앞에 수를 맨 뒤로
        elements.push(elements.shift());
        //answer에 elements값을 더한 값을 넣는 스택
        let stack = [];
        for (let j = 0; j < elements.length; j++) {
            stack.push(answer[j] + elements[j]);
        }
        //해당 스택을 answer에 앞에 넣음
        answer.unshift(...stack);
    }
    //answer에서 가장 큰 값은 elements의 모든 값을 더한 값보다 크면 안됨
    answer = answer.filter((a) => a <= elements.reduce((a, b) => a + b));
    //겹치는 것 제거
    answer = [...new Set(answer)];
    return answer.length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.15ms, 33.4MB)
// 테스트 2 〉	통과 (32.14ms, 41.1MB)
// 테스트 3 〉	통과 (64.09ms, 46.1MB)
// 테스트 4 〉	통과 (118.12ms, 50MB)
// 테스트 5 〉	통과 (222.01ms, 59.6MB)
// 테스트 6 〉	통과 (334.90ms, 62.2MB)
// 테스트 7 〉	통과 (510.27ms, 74.2MB)
// 테스트 8 〉	통과 (730.20ms, 77.9MB)
// 테스트 9 〉	통과 (919.49ms, 80.1MB)
// 테스트 10 〉	통과 (1217.71ms, 93MB)
// 테스트 11 〉	통과 (245.90ms, 56.1MB)
// 테스트 12 〉	통과 (318.23ms, 62.2MB)
// 테스트 13 〉	통과 (387.17ms, 63.9MB)
// 테스트 14 〉	통과 (473.74ms, 74.2MB)
// 테스트 15 〉	통과 (602.56ms, 81.6MB)
// 테스트 16 〉	통과 (716.93ms, 84.8MB)
// 테스트 17 〉	통과 (800.52ms, 82.3MB)
// 테스트 18 〉	통과 (916.83ms, 80.2MB)
// 테스트 19 〉	통과 (1093.11ms, 91.9MB)
// 테스트 20 〉	통과 (1219.27ms, 93.1MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
