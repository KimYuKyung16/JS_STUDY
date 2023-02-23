function solution(brown, yellow) {
    var answer = [];
    let height, width;
    
   for (height=1; height<=yellow; height++) {
       width = yellow / height;
       if ((width * 2 + height * 2) + 4 == brown) return [width+2, height+2];
   }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 30MB)
테스트 2 〉	통과 (0.07ms, 29.9MB)
테스트 3 〉	통과 (0.15ms, 29.8MB)
테스트 4 〉	통과 (0.04ms, 29.9MB)
테스트 5 〉	통과 (0.05ms, 30MB)
테스트 6 〉	통과 (0.07ms, 30.1MB)
테스트 7 〉	통과 (0.08ms, 29.8MB)
테스트 8 〉	통과 (0.17ms, 30.1MB)
테스트 9 〉	통과 (0.10ms, 30MB)
테스트 10 〉	통과 (0.12ms, 30MB)
테스트 11 〉	통과 (0.04ms, 30.2MB)
테스트 12 〉	통과 (0.09ms, 30MB)
테스트 13 〉	통과 (0.04ms, 30.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/