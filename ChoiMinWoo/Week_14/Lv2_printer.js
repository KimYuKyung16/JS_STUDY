function solution(priorities, location) {
    let answer = 0;
    //index 포함하도록 배열 생성
    let array = priorities.map((a, i) => [i, a]);
    //큰 순서로 정렬
    priorities = priorities.sort((a, b) => b - a);

    while (array.length) {
        //가장 큰값 max
        let max = priorities[0];
        //max보다 작으면 뒤로 옮김
        if (array[0][1] < max) {
            array.push(array.shift());
        } else {
            //가장 큰 값일 때
            //max값 변경을 위해
            priorities.shift();

            answer++;
            //해당 index를 찾으면 return answer
            if (array.shift()[0] === location) {
                return answer;
            }
        }
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.18ms, 33.6MB)
// 테스트 2 〉	통과 (0.24ms, 33.6MB)
// 테스트 3 〉	통과 (0.19ms, 33.5MB)
// 테스트 4 〉	통과 (0.27ms, 33.6MB)
// 테스트 5 〉	통과 (0.09ms, 33.6MB)
// 테스트 6 〉	통과 (0.19ms, 33.7MB)
// 테스트 7 〉	통과 (0.17ms, 33.6MB)
// 테스트 8 〉	통과 (0.30ms, 33.7MB)
// 테스트 9 〉	통과 (0.16ms, 33.6MB)
// 테스트 10 〉	통과 (0.38ms, 33.7MB)
// 테스트 11 〉	통과 (0.34ms, 33.6MB)
// 테스트 12 〉	통과 (0.19ms, 33.5MB)
// 테스트 13 〉	통과 (0.22ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.6MB)
// 테스트 15 〉	통과 (0.14ms, 33.5MB)
// 테스트 16 〉	통과 (0.17ms, 33.7MB)
// 테스트 17 〉	통과 (0.25ms, 33.6MB)
// 테스트 18 〉	통과 (0.16ms, 33.6MB)
// 테스트 19 〉	통과 (0.22ms, 33.6MB)
// 테스트 20 〉	통과 (0.19ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
