function solution(arr)
{
    let answer = [];  
    const len = arr.length;
    
    answer.push(arr.pop());
    for (var i=0; i<len-1; i++) {
        let pop_value = arr.pop(); // 제일 끝 값 삭제
             
        if (pop_value === answer[answer.length-1]) continue; // 같은 값이 연속으로 있다면
        else answer.push(pop_value); // 같은 값이 아니라면
    }
    
    return answer.reverse();
}

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.13ms, 33.4MB)
테스트 3 〉	통과 (0.19ms, 33.4MB)
테스트 4 〉	통과 (0.18ms, 33.4MB)
테스트 5 〉	통과 (0.22ms, 33.4MB)
테스트 6 〉	통과 (0.14ms, 33.4MB)
테스트 7 〉	통과 (0.13ms, 33.4MB)
테스트 8 〉	통과 (0.18ms, 33.4MB)
테스트 9 〉	통과 (0.14ms, 33.4MB)
테스트 10 〉	통과 (0.13ms, 33.5MB)
테스트 11 〉	통과 (0.15ms, 33.5MB)
테스트 12 〉	통과 (0.13ms, 33.4MB)
테스트 13 〉	통과 (0.17ms, 33.4MB)
테스트 14 〉	통과 (0.16ms, 33.4MB)
테스트 15 〉	통과 (0.17ms, 33.5MB)
테스트 16 〉	통과 (0.13ms, 33.5MB)
테스트 17 〉	통과 (0.06ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (59.15ms, 85.1MB)
테스트 2 〉	통과 (49.12ms, 85.4MB)
테스트 3 〉	통과 (18.88ms, 85.9MB)
테스트 4 〉	통과 (21.11ms, 85.6MB)
채점 결과
정확성: 71.9
효율성: 28.1
합계: 100.0 / 100.0
*/