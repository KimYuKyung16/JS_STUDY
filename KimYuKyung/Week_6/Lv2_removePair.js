function solution(s)
{
    let arr = [];
    
    s.split('').forEach((x, index) => {
        if (x === arr[arr.length-1]) arr.pop();
        else arr.push(x);
    })
    
    return arr.length ? 0 : 1;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (8.02ms, 37.2MB)
테스트 3 〉	통과 (5.77ms, 37.4MB)
테스트 4 〉	통과 (5.58ms, 37.8MB)
테스트 5 〉	통과 (8.50ms, 37.8MB)
테스트 6 〉	통과 (5.56ms, 37.8MB)
테스트 7 〉	통과 (6.00ms, 37.9MB)
테스트 8 〉	통과 (6.20ms, 37.8MB)
테스트 9 〉	통과 (0.05ms, 33.5MB)
테스트 10 〉	통과 (0.07ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (62.17ms, 59.2MB)
테스트 2 〉	통과 (65.23ms, 50MB)
테스트 3 〉	통과 (41.32ms, 55.1MB)
테스트 4 〉	통과 (41.22ms, 55.3MB)
테스트 5 〉	통과 (41.49ms, 55.1MB)
테스트 6 〉	통과 (43.78ms, 55.1MB)
테스트 7 〉	통과 (41.27ms, 55.2MB)
테스트 8 〉	통과 (44.55ms, 55.2MB)
채점 결과
정확성: 60.2
효율성: 39.8
합계: 100.0 / 100.0
*/