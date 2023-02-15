// function solution(X, Y) {
//     let answer = '';
//     for(let i=0; i<X.length; i++){
//         for(let j=0; j<Y.length; j++){
//             if(X[i]===Y[j]) {
//                 answer+=X[i]
//                 Y=Y.substr(0,j)+Y.substr(j+1)
//                 break;
//             }
//         }
//     }
//     const a=answer.split("").sort((a,b)=>b-a).join("")
//     return answer? a:"-1";
// }
function solution(X, Y) {
    let answer = "";
    let x = X.split("").map(Number);
    let y = Y.split("").map(Number);
    for (let i = 0; i < 10; i++) {
        const a = x.filter((a) => a === i).length;
        const b = y.filter((a) => a === i).length;
        const c =
            a > b
                ? (answer += (i + "").repeat(b))
                : (answer += (i + "").repeat(a));
    }
    answer = answer
        .split("")
        .sort((a, b) => b - a)
        .join("");
    if (parseInt(answer) === 0) return "0";
    return answer ? answer : "-1";
}

function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.6MB)
// 테스트 3 〉	통과 (0.18ms, 33.6MB)
// 테스트 4 〉	통과 (0.18ms, 33.5MB)
// 테스트 5 〉	통과 (0.15ms, 33.6MB)
// 테스트 6 〉	통과 (1.09ms, 33.6MB)
// 테스트 7 〉	통과 (0.51ms, 33.6MB)
// 테스트 8 〉	통과 (0.82ms, 33.6MB)
// 테스트 9 〉	통과 (0.69ms, 33.6MB)
// 테스트 10 〉	통과 (0.75ms, 33.6MB)
// 테스트 11 〉	통과 (1865.13ms, 236MB)
// 테스트 12 〉	통과 (1692.86ms, 244MB)
// 테스트 13 〉	통과 (1676.84ms, 250MB)
// 테스트 14 〉	통과 (1971.63ms, 246MB)
// 테스트 15 〉	통과 (1793.07ms, 244MB)
// 테스트 16 〉	통과 (0.15ms, 33.6MB)
// 테스트 17 〉	통과 (0.11ms, 33.6MB)
// 테스트 18 〉	통과 (0.15ms, 33.7MB)
// 테스트 19 〉	통과 (0.15ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
