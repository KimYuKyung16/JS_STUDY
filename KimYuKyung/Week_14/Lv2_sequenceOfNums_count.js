function solution(elements) {
    let answer = [];
    
    for (let i=1; i<elements.length; i++) {
        for (let j=0; j<elements.length; j++) {
            let sum = 0; // 수열 합
            
            if (j+i > elements.length) { // 원형을 넘어갈 경우
                sum += elements.slice(j, elements.length).reduce((acc, cur) => acc + cur, 0); // 원형 넘어가기 전    
                sum += elements.slice(0, j+i-elements.length).reduce((acc, cur) => acc + cur, 0); // 원형 넘어간 후
            } else { // 원형을 넘어가지않을 경우
                sum = elements.slice(j, j+i).reduce((acc, cur) => acc + cur, 0); // 원형 안에서 자르기
            }
            answer.push(sum);
        }    
    }
    
    answer.push(elements.reduce((acc, cur) => acc + cur, 0)); // elements 개수랑 합할 개수가 같을 경우는 비교할 필요x
    answer = [...new Set(answer)]; // 중복 제거
    return answer.length;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (19.52ms, 42.2MB)
테스트 3 〉	통과 (38.41ms, 47.6MB)
테스트 4 〉	통과 (68.78ms, 51.4MB)
테스트 5 〉	통과 (126.06ms, 60.1MB)
테스트 6 〉	통과 (214.38ms, 68.7MB)
테스트 7 〉	통과 (281.00ms, 75.1MB)
테스트 8 〉	통과 (523.03ms, 82MB)
테스트 9 〉	통과 (786.76ms, 82.4MB)
테스트 10 〉	통과 (1078.52ms, 83MB)
테스트 11 〉	통과 (178.66ms, 68.6MB)
테스트 12 〉	통과 (209.93ms, 68.6MB)
테스트 13 〉	통과 (327.42ms, 65MB)
테스트 14 〉	통과 (327.20ms, 75MB)
테스트 15 〉	통과 (341.00ms, 75.2MB)
테스트 16 〉	통과 (464.89ms, 83.2MB)
테스트 17 〉	통과 (604.79ms, 82.2MB)
테스트 18 〉	통과 (666.93ms, 82.5MB)
테스트 19 〉	통과 (868.36ms, 82.8MB)
테스트 20 〉	통과 (830.77ms, 81.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/