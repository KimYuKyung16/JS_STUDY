function solution(priorities, location) {
    let max = Math.max(...priorities);
    let answer=0;
    
    let position = priorities.map((item,index)=>item=index);    // 각각 위치의 값들을 인덱스로 나타내준다.
    while(priorities.length!==0){           //첫번째 요소가 플린팅 되면 제거됨
        if(priorities[0]<max){              // 첫번째 요소가 배열의 최대값보다 작으면 뒤로 보낸다.
            priorities.push(priorities.shift());
            position.push(position.shift());    
        }else{                              // 프린트가 될 경우
            answer++;                       
            priorities.shift();
            if(position.shift()===location){        //해당 배열과 location이 같으면 answer 리턴
                return answer;
            }
        max = Math.max(...priorities);              // 최대값은 계속 변경
        }
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.24ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.16ms, 33.4MB)
// 테스트 7 〉	통과 (0.17ms, 33.4MB)
// 테스트 8 〉	통과 (0.22ms, 33.4MB)
// 테스트 9 〉	통과 (0.16ms, 33.4MB)
// 테스트 10 〉	통과 (0.24ms, 33.4MB)
// 테스트 11 〉	통과 (0.20ms, 33.5MB)
// 테스트 12 〉	통과 (0.14ms, 33.4MB)
// 테스트 13 〉	통과 (0.19ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 테스트 15 〉	통과 (0.06ms, 33.4MB)
// 테스트 16 〉	통과 (0.16ms, 33.4MB)
// 테스트 17 〉	통과 (0.21ms, 33.5MB)
// 테스트 18 〉	통과 (0.15ms, 33.4MB)
// 테스트 19 〉	통과 (0.23ms, 33.4MB)
// 테스트 20 〉	통과 (0.16ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0