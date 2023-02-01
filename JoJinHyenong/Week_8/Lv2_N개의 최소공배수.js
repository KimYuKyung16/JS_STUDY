function sol(a,b){
    let su = 1;
    for(let i=2; i<=Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            su = i;
        }
    }
    return su;
}
// 최대 공약수를 구하는 함수

function solution(arr) {
    let hap = arr[0];
    for(let i=1,len=arr.length;i<len;i++){
        hap = (hap*arr[i])/sol(hap,arr[i]);
    }
    return hap
}
// 최소공배수 = 두수의 곱/두수의 최대공약수를 이용한 풀이

// 정확성  테스트
// 테스트 1 〉	통과 (0.13ms, 33.6MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.7MB)
// 테스트 6 〉	통과 (0.21ms, 33.4MB)
// 테스트 7 〉	통과 (0.16ms, 33.6MB)
// 테스트 8 〉	통과 (0.21ms, 33.7MB)
// 테스트 9 〉	통과 (0.13ms, 33.6MB)
// 테스트 10 〉	통과 (0.14ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0