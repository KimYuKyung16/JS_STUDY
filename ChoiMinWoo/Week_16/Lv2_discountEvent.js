function solution(want, number, discount) {
    var answer = 0;
    for (let i = 0; i < discount.length - 9; i++) {
        //10개씩 자르기
        let array = discount.slice(i, i + 10);
        let n = [];
        //배열 n에 want의 각 과일 갯수를 push
        for (let j = 0; j < want.length; j++) {
            n.push(array.filter((a) => a == want[j]).length);
        }
        //배열 n의 각 원소가 number보다 다 크다면 answer++
        if (n.every((item, k) => n[k] >= number[k])) answer++;
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (12.29ms, 37.5MB)
// 테스트 2 〉	통과 (76.70ms, 40MB)
// 테스트 3 〉	통과 (18.57ms, 37.5MB)
// 테스트 4 〉	통과 (20.93ms, 38.4MB)
// 테스트 5 〉	통과 (26.14ms, 39.1MB)
// 테스트 6 〉	통과 (11.42ms, 37.2MB)
// 테스트 7 〉	통과 (28.55ms, 37.7MB)
// 테스트 8 〉	통과 (41.59ms, 41.9MB)
// 테스트 9 〉	통과 (11.10ms, 37.8MB)
// 테스트 10 〉	통과 (27.92ms, 39.5MB)
// 테스트 11 〉	통과 (9.68ms, 37.4MB)
// 테스트 12 〉	통과 (0.14ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
