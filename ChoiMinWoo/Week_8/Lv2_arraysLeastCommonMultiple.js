function solution(arr) {
    let answer = 0;
    arr.sort((a, b) => a - b);
    console.log(arr[arr.length - 1]);
    for (let i = 1; i < 1000000; i++) {
        answer = arr[arr.length - 1] * i;
        let temp = [];
        temp = arr.filter((a) => answer % a === 0);
        if (temp.length === arr.length) return answer;
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.46ms, 33.5MB)
// 테스트 2 〉	통과 (2.50ms, 33.5MB)
// 테스트 3 〉	통과 (2.36ms, 33.6MB)
// 테스트 4 〉	통과 (3.52ms, 33.5MB)
// 테스트 5 〉	통과 (2.28ms, 33.5MB)
// 테스트 6 〉	통과 (17.57ms, 36.8MB)
// 테스트 7 〉	통과 (8.08ms, 36.8MB)
// 테스트 8 〉	통과 (2.73ms, 33.7MB)
// 테스트 9 〉	통과 (9.87ms, 36.9MB)
// 테스트 10 〉	통과 (11.85ms, 36.8MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
