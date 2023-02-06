function solution(nums) {
    let answer = 0;
    let len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                prime(sum) && answer++;
            }
        }
    }

    return answer;
}

function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (1.04ms, 35.7MB)
// 테스트 2 〉	통과 (1.28ms, 35.8MB)
// 테스트 3 〉	통과 (0.28ms, 33.6MB)
// 테스트 4 〉	통과 (0.25ms, 33.7MB)
// 테스트 5 〉	통과 (1.33ms, 35.6MB)
// 테스트 6 〉	통과 (2.58ms, 35.9MB)
// 테스트 7 〉	통과 (0.20ms, 33.5MB)
// 테스트 8 〉	통과 (4.41ms, 35.9MB)
// 테스트 9 〉	통과 (0.46ms, 33.5MB)
// 테스트 10 〉	통과 (4.09ms, 35.9MB)
// 테스트 11 〉	통과 (0.17ms, 33.6MB)
// 테스트 12 〉	통과 (0.17ms, 33.7MB)
// 테스트 13 〉	통과 (0.19ms, 33.5MB)
// 테스트 14 〉	통과 (0.15ms, 33.7MB)
// 테스트 15 〉	통과 (0.15ms, 33.5MB)
// 테스트 16 〉	통과 (4.26ms, 35.9MB)
// 테스트 17 〉	통과 (4.35ms, 35.7MB)
// 테스트 18 〉	통과 (0.19ms, 33.6MB)
// 테스트 19 〉	통과 (0.07ms, 33.5MB)
// 테스트 20 〉	통과 (46.42ms, 37.1MB)
// 테스트 21 〉	통과 (28.08ms, 36.8MB)
// 테스트 22 〉	통과 (0.49ms, 33.5MB)
// 테스트 23 〉	통과 (0.06ms, 33.4MB)
// 테스트 24 〉	통과 (4.22ms, 35.8MB)
// 테스트 25 〉	통과 (33.39ms, 37.1MB)
// 테스트 26 〉	통과 (0.06ms, 33MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
