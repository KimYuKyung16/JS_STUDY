function solution(numbers, hand) {
    
    // 위치 찾아주는 함수
    function findKey(key) {
        let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (keypad[i][j] === key) {
                    return [i, j];
                }
            }
        }
    }
    
    var answer = '';
    let left = '*';
    let right = '#';
    for (let i of numbers) {
        if (i === 1 || i === 4 || i === 7) {
            answer += 'L';
            left = i;
        }else if (i === 3 || i === 6 || i === 9) {
            answer += 'R';
            right = i - 2;
        }else {
            let r = findKey(right);
            let l = findKey(left);
            let middle = findKey(i);
            // 손위치와 눌러야할 키패드 거리 구하기
            let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
            let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
            if (rr === ll) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
                hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
            }else if(rr > ll) { // 오른손의 거리가 더 멀다면
                answer += 'L';
                left = i;
            }else { // 왼손의 거리가 더 멀다면
                answer += 'R';
                right = i;
            }
        }
    }
    
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.19ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.26ms, 33.6MB)
// 테스트 6 〉	통과 (0.12ms, 33.4MB)
// 테스트 7 〉	통과 (0.33ms, 33.5MB)
// 테스트 8 〉	통과 (0.22ms, 33.6MB)
// 테스트 9 〉	통과 (0.31ms, 33.4MB)
// 테스트 10 〉	통과 (0.32ms, 33.5MB)
// 테스트 11 〉	통과 (0.43ms, 33.5MB)
// 테스트 12 〉	통과 (0.35ms, 33.5MB)
// 테스트 13 〉	통과 (0.29ms, 33.6MB)
// 테스트 14 〉	통과 (0.65ms, 33.7MB)
// 테스트 15 〉	통과 (0.99ms, 33.7MB)
// 테스트 16 〉	통과 (1.15ms, 33.7MB)
// 테스트 17 〉	통과 (1.36ms, 34MB)
// 테스트 18 〉	통과 (1.23ms, 33.9MB)
// 테스트 19 〉	통과 (1.34ms, 33.9MB)
// 테스트 20 〉	통과 (2.11ms, 34MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0