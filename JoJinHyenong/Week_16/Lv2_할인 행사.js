function solution(want,number,discount){
    let count =0;
    for(let i=0;i<discount.length-9;i++){
        const slice = discount.slice(i,i+10);
        let flag = true;
        for(let j=0;j<want.length;j++){
            if(slice.filter(item=>item===want[j]).length!==number[j]){
                flag = false;
                break;
            }
        }
        if(flag) count+=1;
    }
    return count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (7.17ms, 37.2MB)
// 테스트 2 〉	통과 (18.92ms, 40.2MB)
// 테스트 3 〉	통과 (8.57ms, 37.4MB)
// 테스트 4 〉	통과 (16.13ms, 38.7MB)
// 테스트 5 〉	통과 (20.61ms, 39.1MB)
// 테스트 6 〉	통과 (9.57ms, 37.3MB)
// 테스트 7 〉	통과 (8.96ms, 37.8MB)
// 테스트 8 〉	통과 (20.12ms, 42.1MB)
// 테스트 9 〉	통과 (13.12ms, 37.7MB)
// 테스트 10 〉	통과 (12.79ms, 39.5MB)
// 테스트 11 〉	통과 (7.05ms, 37.3MB)
// 테스트 12 〉	통과 (0.08ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0