function solution(numbers, hand) {
    let answer = "";
    let lbutton = [1, 4, 7, "*"];
    let rbutton = [3, 6, 9, "#"];
    let mbutton = [2, 5, 8, 0];
    const two = [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4];
    const five = [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3];
    const eight = [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2];
    const zero = [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1];
    let left = 10;
    let right = 11;
    for (let i = 0; i < numbers.length; i++) {
        if (lbutton.includes(numbers[i])) {
            answer += "L";
            left = numbers[i];
        } else if (rbutton.includes(numbers[i])) {
            answer += "R";
            right = numbers[i];
        } else {
            switch (numbers[i]) {
                case 2:
                    if (two[left] > two[right]) {
                        answer += "R";
                        right = numbers[i];
                    } else if (two[left] < two[right]) {
                        answer += "L";
                        left = numbers[i];
                    } else {
                        if (hand === "right") {
                            answer += "R";
                            right = numbers[i];
                        } else {
                            answer += "L";
                            left = numbers[i];
                        }
                    }
                    break;
                case 5:
                    if (five[left] > five[right]) {
                        answer += "R";
                        right = numbers[i];
                    } else if (five[left] < five[right]) {
                        answer += "L";
                        left = numbers[i];
                    } else {
                        if (hand === "right") {
                            answer += "R";
                            right = numbers[i];
                        } else {
                            answer += "L";
                            left = numbers[i];
                        }
                    }
                    break;
                case 8:
                    if (eight[left] > eight[right]) {
                        answer += "R";
                        right = numbers[i];
                    } else if (eight[left] < eight[right]) {
                        answer += "L";
                        left = numbers[i];
                    } else {
                        if (hand === "right") {
                            answer += "R";
                            right = numbers[i];
                        } else {
                            answer += "L";
                            left = numbers[i];
                        }
                    }
                    break;
                case 0:
                    if (zero[left] > zero[right]) {
                        answer += "R";
                        right = numbers[i];
                    } else if (zero[left] < zero[right]) {
                        answer += "L";
                        left = numbers[i];
                    } else {
                        if (hand === "right") {
                            answer += "R";
                            right = numbers[i];
                        } else {
                            answer += "L";
                            left = numbers[i];
                        }
                    }
                    break;
            }
        }
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 33.5MB)
// 테스트 2 〉	통과 (0.11ms, 33.6MB)
// 테스트 3 〉	통과 (0.10ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.6MB)
// 테스트 5 〉	통과 (0.11ms, 33.6MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.11ms, 33.6MB)
// 테스트 8 〉	통과 (0.12ms, 33.4MB)
// 테스트 9 〉	통과 (0.18ms, 33.4MB)
// 테스트 10 〉	통과 (0.14ms, 33.4MB)
// 테스트 11 〉	통과 (0.12ms, 33.5MB)
// 테스트 12 〉	통과 (0.12ms, 33.4MB)
// 테스트 13 〉	통과 (0.25ms, 33.5MB)
// 테스트 14 〉	통과 (0.40ms, 33.6MB)
// 테스트 15 〉	통과 (0.35ms, 33.5MB)
// 테스트 16 〉	통과 (0.46ms, 33.5MB)
// 테스트 17 〉	통과 (0.37ms, 33.6MB)
// 테스트 18 〉	통과 (0.39ms, 33.6MB)
// 테스트 19 〉	통과 (0.44ms, 33.6MB)
// 테스트 20 〉	통과 (0.58ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
