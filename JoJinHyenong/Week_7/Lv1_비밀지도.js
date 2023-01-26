function solution(n, arr1, arr2) {
    var answer = [];
   
    for(let i=0; i<n; i++){
        // toString(2)은 이진수로 반환하는 것.
        const bin = (arr1[i] | arr2[i]).toString(2);
        let line = [];
        for(let j = bin.length-n; j<bin.length; j++) { // j가(인덱스값)이 -1일 경우 undefined 반환.
            if(bin[j] === '1') { // 1이면 '#', 그 외 ' '
                line.push('#');
            } else {
                line.push(' ');
            }
        }
        answer.push(line.join(''));
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.25ms, 33.5MB)
// 테스트 2 〉	통과 (0.18ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.27ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.17ms, 33.6MB)
// 테스트 7 〉	통과 (0.15ms, 33.4MB)
// 테스트 8 〉	통과 (0.22ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0