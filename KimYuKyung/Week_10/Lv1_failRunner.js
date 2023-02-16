function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    
    for (var i=0; i<completion.length; i++) {
        if (participant[i] == completion[i]) continue;
        else return participant[i];
    }
    
    return participant[participant.length-1];
}

/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.36ms, 33.6MB)
테스트 4 〉	통과 (0.70ms, 33.8MB)
테스트 5 〉	통과 (0.65ms, 33.8MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (46.00ms, 47.3MB)
테스트 2 〉	통과 (106.90ms, 52.9MB)
테스트 3 〉	통과 (92.30ms, 58.1MB)
테스트 4 〉	통과 (103.14ms, 60MB)
테스트 5 〉	통과 (93.64ms, 58.2MB)
채점 결과
정확성: 58.3
효율성: 41.7
합계: 100.0 / 100.0
*/