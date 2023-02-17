// function solution(citations) {
//     let array=[];
//     for(let i=0,len=Math.ceil(citations.length/2);i<len;i++){
//         array.push(Math.max(...citations));
//         citations.splice(citations.indexOf(Math.max(...citations)),1);
//     }
//     return Math.min(...array);
// }
function solution(citations) {
    citations.sort((a, b) => a - b)
    const n = citations.length;
    const arr = [];
    const maxH = Math.max(...citations);
    for (let h = 0; h <= maxH; h++) {
        const more = citations.filter((v) => v >= h).length;
        if(h <= more) {
            arr.push(h);
        }
    }
    return Math.max(...arr);
}

// 정확성  테스트
// 테스트 1 〉	통과 (58.96ms, 36.8MB)
// 테스트 2 〉	통과 (86.50ms, 36.7MB)
// 테스트 3 〉	통과 (76.03ms, 36.8MB)
// 테스트 4 〉	통과 (69.83ms, 36.8MB)
// 테스트 5 〉	통과 (83.01ms, 36.8MB)
// 테스트 6 〉	통과 (96.00ms, 36.8MB)
// 테스트 7 〉	통과 (40.52ms, 36.8MB)
// 테스트 8 〉	통과 (10.23ms, 36.8MB)
// 테스트 9 〉	통과 (16.73ms, 36.7MB)
// 테스트 10 〉	통과 (47.77ms, 36.9MB)
// 테스트 11 〉	통과 (104.27ms, 36.8MB)
// 테스트 12 〉	통과 (22.70ms, 36.8MB)
// 테스트 13 〉	통과 (103.20ms, 36.8MB)
// 테스트 14 〉	통과 (88.47ms, 36.9MB)
// 테스트 15 〉	통과 (97.28ms, 36.9MB)
// 테스트 16 〉	통과 (0.08ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0