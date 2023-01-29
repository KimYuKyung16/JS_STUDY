function solution(n, a, b) {
    let array = new Array(n);
    array.fill(0);
    array[a - 1] = a;
    array[b - 1] = b;
    return tonurment(array, 1, n);
}

function tonurment(array, answer, n) {
    let winners = [];
    if (array.length < 1) {
        return answer;
    }
    for (let i = 0; i < n; i += 2) {
        if (array[i] != 0 && array[i + 1] != 0) return answer;
        else if (array[i] === 0 && array[i + 1] === 0) winners.push(0);
        else
            array[i] > array[i + 1]
                ? winners.push(array[i])
                : winners.push(array[i + 1]);
    }
    answer++;
    return tonurment(winners, answer, n / 2);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (0.17ms, 33.6MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.26ms, 33.6MB)
// 테스트 6 〉	통과 (0.10ms, 33.6MB)
// 테스트 7 〉	통과 (0.27ms, 33.6MB)
// 테스트 8 〉	통과 (0.36ms, 33.6MB)
// 테스트 9 〉	통과 (0.24ms, 33.6MB)
// 테스트 10 〉	통과 (0.25ms, 33.6MB)
// 테스트 11 〉	통과 (0.78ms, 33.7MB)
// 테스트 12 〉	통과 (0.45ms, 33.7MB)
// 테스트 13 〉	통과 (0.95ms, 33.6MB)
// 테스트 14 〉	통과 (0.51ms, 33.6MB)
// 테스트 15 〉	통과 (0.86ms, 33.8MB)
// 테스트 16 〉	통과 (0.86ms, 33.7MB)
// 테스트 17 〉	통과 (0.57ms, 33.7MB)
// 테스트 18 〉	통과 (0.86ms, 33.7MB)
// 테스트 19 〉	통과 (0.55ms, 33.6MB)
// 테스트 20 〉	통과 (0.76ms, 33.8MB)
// 테스트 21 〉	통과 (0.51ms, 33.6MB)
// 테스트 22 〉	통과 (0.71ms, 33.6MB)
// 테스트 23 〉	통과 (0.92ms, 33.7MB)
// 테스트 24 〉	통과 (0.68ms, 33.7MB)
// 테스트 25 〉	통과 (0.22ms, 33.5MB)
// 테스트 26 〉	통과 (0.33ms, 33.5MB)
// 테스트 27 〉	통과 (47.50ms, 62.7MB)
// 테스트 28 〉	통과 (79.02ms, 63.2MB)
// 테스트 29 〉	통과 (56.63ms, 64MB)
// 테스트 30 〉	통과 (70.14ms, 63.2MB)
// 테스트 31 〉	통과 (46.32ms, 62.6MB)
// 테스트 32 〉	통과 (51.18ms, 63MB)
// 테스트 33 〉	통과 (56.21ms, 63.7MB)
// 테스트 34 〉	통과 (41.52ms, 63.8MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
