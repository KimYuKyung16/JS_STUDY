function solution(numbers) {
    numbers.sort((a,b)=>a-b);
    console.log(numbers)
   
    let array=[]
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            array.push(numbers[i]+numbers[j]);
        }
    }
     var answer = [...new Set(array)]
     return answer.sort((a,b)=>a-b);
}


// 정확성  테스트
// 테스트 1 〉	통과 (4.79ms, 33.6MB)
// 테스트 2 〉	통과 (3.28ms, 33.6MB)
// 테스트 3 〉	통과 (2.98ms, 33.6MB)
// 테스트 4 〉	통과 (4.35ms, 33.5MB)
// 테스트 5 〉	통과 (3.54ms, 33.5MB)
// 테스트 6 〉	통과 (3.46ms, 33.7MB)
// 테스트 7 〉	통과 (3.91ms, 33.6MB)
// 테스트 8 〉	통과 (3.90ms, 33.7MB)
// 테스트 9 〉	통과 (3.92ms, 33.7MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0