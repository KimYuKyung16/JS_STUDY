// function solution(arr1, arr2) {
//     const array=[];
//     arr1.map((item,index)=>{
//         let newarray=[];        // 빈배열을 만든다.
//         for(let i=0;i<item.length;i++){     //행렬의 내부 요소의 길이만큼 반복
//             newarray.push(arr1[index][i]+arr2[index][i]);   
//         }array.push(newarray);
//     });
//     return array;
// }

/// 참고할만 한 풀이
function solution(A, B) {
    
    return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.09ms, 33.6MB)
// 테스트 2 〉	통과 (0.17ms, 33.6MB)
// 테스트 3 〉	통과 (0.35ms, 33.7MB)
// 테스트 4 〉	통과 (0.21ms, 33.7MB)
// 테스트 5 〉	통과 (0.23ms, 33.6MB)
// 테스트 6 〉	통과 (0.18ms, 33.6MB)
// 테스트 7 〉	통과 (0.20ms, 33.5MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.46ms, 38.5MB)
// 테스트 10 〉	통과 (0.54ms, 38MB)
// 테스트 11 〉	통과 (0.46ms, 37.8MB)
// 테스트 12 〉	통과 (0.42ms, 38MB)
// 테스트 13 〉	통과 (0.43ms, 37.7MB)
// 테스트 14 〉	통과 (0.49ms, 38MB)
// 테스트 15 〉	통과 (0.55ms, 38MB)
// 테스트 16 〉	통과 (0.45ms, 38.1MB)
// 테스트 17 〉	통과 (12.07ms, 67.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0