function solution(people, limit) {
    //   // 효율성 실패
    //   let boat = 0;
    //   people.sort((a, b) => b - a);
    //   while (people.length) {
    //       if (people[0] + people[people.length - 1] <= limit)people.pop();
    //       people.shift();
    //       boat++;
    //   }
    // return boat;

    let boat = 0;
    people.sort((a, b) => b - a);
    for (let i = 0; i < people.length; i++) {
        if (people[i] + people[people.length - 1] <= limit) people.pop();
        boat++;
    }
    return boat;
}

// 정확성  테스트
// 테스트 1 〉	통과 (26.88ms, 35.4MB)
// 테스트 2 〉	통과 (1.16ms, 33.6MB)
// 테스트 3 〉	통과 (1.41ms, 33.7MB)
// 테스트 4 〉	통과 (1.10ms, 33.6MB)
// 테스트 5 〉	통과 (0.72ms, 33.7MB)
// 테스트 6 〉	통과 (0.43ms, 33.6MB)
// 테스트 7 〉	통과 (0.63ms, 33.6MB)
// 테스트 8 〉	통과 (0.16ms, 33.5MB)
// 테스트 9 〉	통과 (0.21ms, 33.5MB)
// 테스트 10 〉	통과 (1.11ms, 33.5MB)
// 테스트 11 〉	통과 (1.00ms, 33.6MB)
// 테스트 12 〉	통과 (0.93ms, 33.6MB)
// 테스트 13 〉	통과 (1.10ms, 33.6MB)
// 테스트 14 〉	통과 (1.26ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (36.65ms, 38MB)
// 테스트 2 〉	통과 (43.32ms, 38MB)
// 테스트 3 〉	통과 (34.24ms, 37.8MB)
// 테스트 4 〉	통과 (30.13ms, 38MB)
// 테스트 5 〉	통과 (10.32ms, 38.1MB)
// 채점 결과
// 정확성: 75.0
// 효율성: 25.0
// 합계: 100.0 / 100.0
