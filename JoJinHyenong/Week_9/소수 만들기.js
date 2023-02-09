function solution(nums) {
    let array=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                array.push(nums[i]+nums[j]+nums[k]);
            }
        }
    }
    
    let count=0;
    for(let i=0;i<array.length;i++){
        let real=[];
        for(let j=1;j<=array[i];j++){
            if(array[i]%j===0){
                real.push(j) 
            }
        }if(real.length===2){
            count++;
        }   
    }return count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (4.93ms, 37.4MB)
// 테스트 2 〉	통과 (5.10ms, 37.6MB)
// 테스트 3 〉	통과 (2.80ms, 37MB)
// 테스트 4 〉	통과 (2.70ms, 36.7MB)
// 테스트 5 〉	통과 (4.31ms, 37.6MB)
// 테스트 6 〉	통과 (15.88ms, 37.6MB)
// 테스트 7 〉	통과 (2.79ms, 36.6MB)
// 테스트 8 〉	통과 (34.04ms, 38.1MB)
// 테스트 9 〉	통과 (5.00ms, 37MB)
// 테스트 10 〉	통과 (27.90ms, 38.1MB)
// 테스트 11 〉	통과 (0.40ms, 33.5MB)
// 테스트 12 〉	통과 (0.25ms, 33.4MB)
// 테스트 13 〉	통과 (0.54ms, 33.5MB)
// 테스트 14 〉	통과 (0.25ms, 33.4MB)
// 테스트 15 〉	통과 (0.33ms, 33.6MB)
// 테스트 16 〉	통과 (118.43ms, 38.1MB)
// 테스트 17 〉	통과 (104.09ms, 38.3MB)
// 테스트 18 〉	통과 (5.46ms, 36.8MB)
// 테스트 19 〉	통과 (0.22ms, 33.5MB)
// 테스트 20 〉	통과 (110.76ms, 38.2MB)
// 테스트 21 〉	통과 (115.08ms, 38.1MB)
// 테스트 22 〉	통과 (23.70ms, 37.6MB)
// 테스트 23 〉	통과 (0.06ms, 33.4MB)
// 테스트 24 〉	통과 (110.54ms, 38.2MB)
// 테스트 25 〉	통과 (96.95ms, 38.2MB)
// 테스트 26 〉	통과 (0.08ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0