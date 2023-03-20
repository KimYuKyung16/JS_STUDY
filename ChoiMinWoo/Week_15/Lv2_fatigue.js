function solution(k, dungeons) {
    let answer = [];

    //방문 여부
    let visited = new Array(dungeons.length).fill(0);

    dfs(k, 0);
    return Math.max(...answer);

    //피로도,던전 들어가는 횟수
    function dfs(k, count) {
        answer.push(count);
        for (let i = 0; i < dungeons.length; i++) {
            //피로도가 남았고 방문하지 않았을 때
            if (k >= dungeons[i][0] && !visited[i]) {
                //방문
                visited[i] = 1;
                //방문 이후 다시 방문을 위해 피로도 줄이고 방문횟수+1
                dfs(k - dungeons[i][1], count + 1);
                //마지막 까지 방문을 마치고 처음 방문한 곳 0으로 초기화
                visited[i] = 0;
            }
        }
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 33.5MB)
// 테스트 2 〉	통과 (0.21ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.27ms, 33.5MB)
// 테스트 5 〉	통과 (0.95ms, 36.1MB)
// 테스트 6 〉	통과 (1.76ms, 36.1MB)
// 테스트 7 〉	통과 (4.83ms, 37.1MB)
// 테스트 8 〉	통과 (5.94ms, 38.2MB)
// 테스트 9 〉	통과 (0.18ms, 33.4MB)
// 테스트 10 〉	통과 (0.54ms, 33.5MB)
// 테스트 11 〉	통과 (0.15ms, 33.5MB)
// 테스트 12 〉	통과 (1.49ms, 36.5MB)
// 테스트 13 〉	통과 (0.26ms, 33.4MB)
// 테스트 14 〉	통과 (0.19ms, 33.4MB)
// 테스트 15 〉	통과 (0.25ms, 33.4MB)
// 테스트 16 〉	통과 (0.18ms, 33.4MB)
// 테스트 17 〉	통과 (0.19ms, 33.3MB)
// 테스트 18 〉	통과 (0.16ms, 33.4MB)
// 테스트 19 〉	통과 (0.18ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
