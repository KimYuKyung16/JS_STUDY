function solution(numbers, target) {
    let answer = 0;

    dfs(0, 0);

    function dfs(i, sum) {
        if (i === numbers.length) {
            //모든 numbers를 돌았을 때 같으면
            if (sum === target) {
                answer++;
            }
            //리턴문이 필요함..  sum != target일 때 재귀를 빠져나오지 못함
            return;
        }
        dfs(i + 1, sum + numbers[i]);
        dfs(i + 1, sum - numbers[i]);
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (12.64ms, 35.4MB)
// 테스트 2 〉	통과 (17.97ms, 35.6MB)
// 테스트 3 〉	통과 (0.20ms, 33.4MB)
// 테스트 4 〉	통과 (0.54ms, 33.4MB)
// 테스트 5 〉	통과 (2.19ms, 35.5MB)
// 테스트 6 〉	통과 (0.28ms, 33.5MB)
// 테스트 7 〉	통과 (0.21ms, 33.4MB)
// 테스트 8 〉	통과 (1.05ms, 35.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
