function solution(numbers, target) {
    let answer=0;
    let array = Array(numbers.length).fill(0);      // 값을 넣어줄 빈 배열 생성
    function def(n){ 
        if(n===numbers.length){     // 배열의 끝까지 돌았다면 중단
            let hap = array.reduce((a,b)=>a+b);     // 배열의 합을 구한다.
            if(hap===target){           // 합이 target과 같으면 answer++
                answer++;
            }
        }else{                          
            array[n]=numbers[n];            // 값을 그대로 대입
            def(n+1);
            array[n]=(-numbers[n]);         // - 부호를 넣어서 대입
            def(n+1);
        }
    }
    def(0);
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (40.83ms, 36.3MB)
// 테스트 2 〉	통과 (46.31ms, 36.3MB)
// 테스트 3 〉	통과 (0.49ms, 33.5MB)
// 테스트 4 〉	통과 (2.00ms, 36.3MB)
// 테스트 5 〉	통과 (4.33ms, 35.7MB)
// 테스트 6 〉	통과 (0.80ms, 33MB)
// 테스트 7 〉	통과 (0.49ms, 33.6MB)
// 테스트 8 〉	통과 (4.77ms, 36.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0