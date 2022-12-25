function solution(phone_number) {
    //     let answer=''
    //     for(let i=0; i<phone_number.length-4; i++) answer+='*'
    //     for(let i=0; i<4; i++) answer+=phone_number.split('').pop()
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.11ms, 33.4MB)
// 테스트 6 〉	통과 (0.10ms, 33.4MB)
// 테스트 7 〉	통과 (0.11ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.3MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.11ms, 33.4MB)
// 테스트 11 〉	통과 (0.16ms, 33.4MB)
// 테스트 12 〉	통과 (0.18ms, 33.6MB)
// 테스트 13 〉	통과 (0.10ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
