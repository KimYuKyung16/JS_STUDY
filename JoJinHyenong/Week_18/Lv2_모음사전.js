function solution(word) {
    let result = {};    // 문자를 넣을 공간
    let count = 0;
    let array = ["A","E","I","O","U"];
    function dfs(answer,len){
        if(len>5) return;
        else{
            result[answer] = count++;
            array.forEach((item)=>{
                dfs(answer+item,len+1);
            });
        };
    }
    dfs("",0);  // 빈 문자열부터 시작
    return result[word];
}

// 정확성  테스트
// 테스트 1 〉	통과 (4.82ms, 38.3MB)
// 테스트 2 〉	통과 (4.62ms, 38.2MB)
// 테스트 3 〉	통과 (4.76ms, 38.3MB)
// 테스트 4 〉	통과 (5.67ms, 38.1MB)
// 테스트 5 〉	통과 (4.58ms, 38.1MB)
// 테스트 6 〉	통과 (4.29ms, 38MB)
// 테스트 7 〉	통과 (5.08ms, 38.1MB)
// 테스트 8 〉	통과 (5.34ms, 38.1MB)
// 테스트 9 〉	통과 (5.29ms, 38.2MB)
// 테스트 10 〉	통과 (5.76ms, 38.1MB)
// 테스트 11 〉	통과 (4.49ms, 38.1MB)
// 테스트 12 〉	통과 (5.12ms, 38.3MB)
// 테스트 13 〉	통과 (4.59ms, 38MB)
// 테스트 14 〉	통과 (5.38ms, 38.1MB)
// 테스트 15 〉	통과 (4.72ms, 38.3MB)
// 테스트 16 〉	통과 (4.69ms, 38.1MB)
// 테스트 17 〉	통과 (5.29ms, 38.1MB)
// 테스트 18 〉	통과 (7.47ms, 38.1MB)
// 테스트 19 〉	통과 (5.40ms, 38.1MB)
// 테스트 20 〉	통과 (5.08ms, 38.1MB)
// 테스트 21 〉	통과 (4.51ms, 38.2MB)
// 테스트 22 〉	통과 (4.81ms, 38.2MB)
// 테스트 23 〉	통과 (5.17ms, 38.3MB)
// 테스트 24 〉	통과 (5.84ms, 38.1MB)
// 테스트 25 〉	통과 (5.93ms, 38.2MB)
// 테스트 26 〉	통과 (5.77ms, 38.2MB)
// 테스트 27 〉	통과 (4.43ms, 38MB)
// 테스트 28 〉	통과 (5.66ms, 38.3MB)
// 테스트 29 〉	통과 (4.80ms, 38.1MB)
// 테스트 30 〉	통과 (5.75ms, 38.1MB)
// 테스트 31 〉	통과 (4.67ms, 38.2MB)
// 테스트 32 〉	통과 (4.83ms, 38.1MB)
// 테스트 33 〉	통과 (6.72ms, 38.1MB)
// 테스트 34 〉	통과 (4.61ms, 38.1MB)
// 테스트 35 〉	통과 (5.60ms, 38.1MB)
// 테스트 36 〉	통과 (4.87ms, 38.2MB)
// 테스트 37 〉	통과 (5.36ms, 38.2MB)
// 테스트 38 〉	통과 (4.59ms, 38.2MB)
// 테스트 39 〉	통과 (4.99ms, 38.3MB)
// 테스트 40 〉	통과 (4.68ms, 38.2MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0