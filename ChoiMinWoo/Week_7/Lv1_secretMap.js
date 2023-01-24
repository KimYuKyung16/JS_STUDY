function solution(n, arr1, arr2) {
    let answer = [];
    let array = [];
    arr1.forEach((a, i) =>
        array.push((a | arr2[i]).toString(2).padStart(n, 0))
    );
    array.forEach((a, i) =>
        answer.push(a.replace(/1/g, "#").replace(/0/g, " "))
    );

    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.23ms, 33.5MB)
// 테스트 2 〉	통과 (0.30ms, 33.5MB)
// 테스트 3 〉	통과 (0.09ms, 33.5MB)
// 테스트 4 〉	통과 (0.20ms, 33.5MB)
// 테스트 5 〉	통과 (0.12ms, 33.6MB)
// 테스트 6 〉	통과 (0.26ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.7MB)
// 테스트 8 〉	통과 (0.14ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
