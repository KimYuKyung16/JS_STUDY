function solution(n) {
    let answer = ''
    let count = parseInt(n/2);
    let remain = n%2
    
    for (let i=0; i<count; i++) {
        answer += '수박';
    }
   
    return remain ? answer + '수' : answer
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.11ms, 33.5MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.12ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.3MB)
테스트 10 〉	통과 (0.04ms, 33.3MB)
테스트 11 〉	통과 (0.04ms, 33.5MB)
테스트 12 〉	통과 (0.04ms, 33.4MB)
테스트 13 〉	통과 (0.04ms, 33.4MB)
테스트 14 〉	통과 (0.04ms, 33.4MB)
테스트 15 〉	통과 (0.21ms, 33.6MB)
테스트 16 〉	통과 (0.04ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/