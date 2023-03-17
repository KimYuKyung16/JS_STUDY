function solution(elements) {
    let p2=1;       //짜를 길이를 나타내는 변수
    let answer=[];
    const len = elements.length;
    while(p2<=elements.length){     //길이를 배열길이 이상으로 짜르면 안된다.
        for(let i=0;i<len;i++){     // i는 시작지점
            if(i+p2>elements.length){   // 짜르는 도중 배열의 길이를 넘어설 경우
                let x= elements.slice(i,len).reduce((a,b)=>a+b);    // 시작지점부터 배열 끝까지 자르고
                let y= elements.slice(0,i+p2-len).reduce((a,b)=>a+b);   // 넘어선 부분만큼 처음부터 자른다.
                answer.push(x+y);
            }else{
               answer.push(elements.slice(i,i+p2).reduce((a,b)=>a+b));
            }
        }
        p2++;
    }
    answer = [...new Set(answer)];
    return answer.length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (19.09ms, 42.4MB)
// 테스트 3 〉	통과 (38.28ms, 46.6MB)
// 테스트 4 〉	통과 (69.52ms, 51.6MB)
// 테스트 5 〉	통과 (134.60ms, 60.1MB)
// 테스트 6 〉	통과 (220.05ms, 70MB)
// 테스트 7 〉	통과 (315.84ms, 76.4MB)
// 테스트 8 〉	통과 (558.95ms, 83.2MB)
// 테스트 9 〉	통과 (753.54ms, 83.8MB)
// 테스트 10 〉	통과 (1107.42ms, 82.9MB)
// 테스트 11 〉	통과 (192.85ms, 69.9MB)
// 테스트 12 〉	통과 (284.50ms, 69.9MB)
// 테스트 13 〉	통과 (240.72ms, 65MB)
// 테스트 14 〉	통과 (339.65ms, 76.3MB)
// 테스트 15 〉	통과 (393.19ms, 76.4MB)
// 테스트 16 〉	통과 (455.73ms, 83.2MB)
// 테스트 17 〉	통과 (509.43ms, 83.6MB)
// 테스트 18 〉	통과 (546.94ms, 83.7MB)
// 테스트 19 〉	통과 (665.10ms, 82.7MB)
// 테스트 20 〉	통과 (747.67ms, 83MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0