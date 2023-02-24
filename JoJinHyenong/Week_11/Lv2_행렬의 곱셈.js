function solution(arr1, arr2) {
    let array =[];
    for(let i=0;i<arr1.length;i++){
        let array2=[]
        for(let j=0;j<arr2[0].length;j++){
            let answer=0;
            for(let k=0;k<arr2.length;k++){
                answer += arr1[i][k]*arr2[k][j];
            }
            array2.push(answer);
        }
        array.push(array2);
    }
    return array;
}

// 정확성  테스트
// 테스트 1 〉	통과 (2.86ms, 36.9MB)
// 테스트 2 〉	통과 (5.39ms, 38.9MB)
// 테스트 3 〉	통과 (4.63ms, 38.7MB)
// 테스트 4 〉	통과 (0.70ms, 33.7MB)
// 테스트 5 〉	통과 (5.49ms, 38.7MB)
// 테스트 6 〉	통과 (5.58ms, 38.6MB)
// 테스트 7 〉	통과 (0.64ms, 33.6MB)
// 테스트 8 〉	통과 (0.33ms, 33.6MB)
// 테스트 9 〉	통과 (0.28ms, 33.6MB)
// 테스트 10 〉	통과 (5.17ms, 38.6MB)
// 테스트 11 〉	통과 (2.97ms, 36.9MB)
// 테스트 12 〉	통과 (0.38ms, 33.7MB)
// 테스트 13 〉	통과 (3.85ms, 38.4MB)
// 테스트 14 〉	통과 (4.78ms, 38.8MB)
// 테스트 15 〉	통과 (3.78ms, 37.2MB)
// 테스트 16 〉	통과 (3.02ms, 37.7MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0