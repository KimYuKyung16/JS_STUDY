function divisor(a){
    let array=[];
    for(let i=1;i<=a;i++){
        let len=[];
        for(let j=1;j<=i/2;j++){ // 약수는 본래 값을 제외하고 n/2보다 클 수 없다.
            if(i%j===0){
                len.push(j);
            }
        }array.push(len.length+1)
    }return array
}
/// 약수의 개수
function solution(number, limit, power) {
    let answer = divisor(number);
    return answer.map((item,index)=>{
        if(item>limit){
            return item=power;
        }else{
            return item;
        }
    }).reduce((a,b)=>a+b)
}

// 정확성  테스트
// 테스트 1 〉	통과 (91.03ms, 38.1MB)
// 테스트 2 〉	통과 (10.43ms, 37.5MB)
// 테스트 3 〉	통과 (3.97ms, 37.4MB)
// 테스트 4 〉	통과 (10.79ms, 37.6MB)
// 테스트 5 〉	통과 (5.21ms, 37.1MB)
// 테스트 6 〉	통과 (100.00ms, 38.1MB)
// 테스트 7 〉	통과 (8.92ms, 37.6MB)
// 테스트 8 〉	통과 (9.08ms, 37.3MB)
// 테스트 9 〉	통과 (104.50ms, 37.8MB)
// 테스트 10 〉	통과 (6.14ms, 36.8MB)
// 테스트 11 〉	통과 (7143.58ms, 43.2MB)
// 테스트 12 〉	통과 (8434.37ms, 43.2MB)
// 테스트 13 〉	통과 (7467.59ms, 43.3MB)
// 테스트 14 〉	통과 (8583.08ms, 43.1MB)
// 테스트 15 〉	통과 (7918.05ms, 43.1MB)
// 테스트 16 〉	통과 (8244.47ms, 43.3MB)
// 테스트 17 〉	통과 (0.10ms, 33.5MB)
// 테스트 18 〉	통과 (8727.35ms, 43.2MB)
// 테스트 19 〉	통과 (8.01ms, 37.6MB)
// 테스트 20 〉	통과 (8.04ms, 37.5MB)
// 테스트 21 〉	통과 (0.08ms, 33.4MB)
// 테스트 22 〉	통과 (0.09ms, 33.6MB)
// 테스트 23 〉	통과 (0.16ms, 33.4MB)
// 테스트 24 〉	통과 (8758.22ms, 43.2MB)
// 테스트 25 〉	통과 (8781.08ms, 43.4MB)
// 테스트 26 〉	통과 (3.27ms, 37.2MB)
// 테스트 27 〉	통과 (5.07ms, 37.1MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0