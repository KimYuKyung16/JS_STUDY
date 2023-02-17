function solution(k, score) {
    let array=[];
    let answer=[];
    for(let i=0;i<score.length;i++){
        if(i+1>k){
            if(score[i]>array[array.length-1]){
                array.pop();
                array.push(score[i]);
                array.sort((a,b)=>b-a);
            }
        }else{
            array.push(score[i]);
            array.sort((a,b)=>b-a);
        }
        answer.push(array[array.length-1]);
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.14ms, 33.5MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.6MB)
// 테스트 5 〉	통과 (0.29ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.18ms, 33.4MB)
// 테스트 8 〉	통과 (0.29ms, 33.4MB)
// 테스트 9 〉	통과 (0.27ms, 33.5MB)
// 테스트 10 〉	통과 (0.35ms, 33.5MB)
// 테스트 11 〉	통과 (0.25ms, 33.6MB)
// 테스트 12 〉	통과 (1.84ms, 33.9MB)
// 테스트 13 〉	통과 (1.17ms, 33.9MB)
// 테스트 14 〉	통과 (0.90ms, 33.9MB)
// 테스트 15 〉	통과 (2.41ms, 34.2MB)
// 테스트 16 〉	통과 (2.33ms, 34.2MB)
// 테스트 17 〉	통과 (1.96ms, 34.1MB)
// 테스트 18 〉	통과 (1.76ms, 34.2MB)
// 테스트 19 〉	통과 (0.44ms, 33.6MB)
// 테스트 20 〉	통과 (0.48ms, 33.6MB)
// 테스트 21 〉	통과 (0.40ms, 33.8MB)
// 테스트 22 〉	통과 (0.56ms, 33.7MB)
// 테스트 23 〉	통과 (0.35ms, 33.6MB)
// 테스트 24 〉	통과 (0.60ms, 33.7MB)
// 테스트 25 〉	통과 (0.60ms, 33.7MB)
// 테스트 26 〉	통과 (0.09ms, 33.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0