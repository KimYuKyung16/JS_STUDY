function solution(A,B){
    var array =[];
    for(let i=0;i<A.length;i++){
        var max = B.reduce(function(a, b) {
        return Math.max(a, b);
        }, -Infinity);
        var min = A.reduce(function(a,b){
            return Math.min(a,b);
        }, Infinity);
        array.push(min*max);
        A.splice(A.indexOf(min),1);
        B.splice(B.indexOf(max),1);
        i--;
    }return array.reduce((a,b)=>a+b)
}

function solution(A,B){
    var array =[];
    for(let i=0;i<A.length;i++){
        array.push(Math.min(...A)*Math.max(...B));
        A.splice(A.indexOf(Math.min(...A)),1);
        B.splice(B.indexOf(Math.max(...B)),1);
        i--;
    }return array.reduce((a,b)=>a+b); 
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.6MB)
// 테스트 2 〉	통과 (0.30ms, 33.4MB)
// 테스트 3 〉	통과 (0.32ms, 33.4MB)
// 테스트 4 〉	통과 (0.43ms, 33.5MB)
// 테스트 5 〉	통과 (0.50ms, 33.5MB)
// 테스트 6 〉	통과 (0.42ms, 33.5MB)
// 테스트 7 〉	통과 (0.45ms, 33.4MB)
// 테스트 8 〉	통과 (0.30ms, 33.5MB)
// 테스트 9 〉	통과 (0.43ms, 33.4MB)
// 테스트 10 〉	통과 (0.44ms, 33.4MB)
// 테스트 11 〉	통과 (0.24ms, 33.5MB)
// 테스트 12 〉	통과 (0.30ms, 33.5MB)
// 테스트 13 〉	통과 (0.26ms, 33.6MB)
// 테스트 14 〉	통과 (0.21ms, 33.5MB)
// 테스트 15 〉	통과 (0.37ms, 33.5MB)
// 테스트 16 〉	통과 (0.21ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)
// 채점 결과
// 정확성: 69.6
// 효율성: 0.0
// 합계: 69.6 / 100.0