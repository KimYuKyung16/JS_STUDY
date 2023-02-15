function solution(s) {
    let answer = 0;
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (test(s)) {
            answer++;
        }
        let a = s[0];
        s.splice(0, 1);
        s.push(a);
    }
    return answer;
}

function test(a) {
    let stack = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "(") {
            stack.push("(");
        } else if (a[i] === "{") {
            stack.push("{");
        } else if (a[i] === "[") {
            stack.push("[");
        } else if (a[i] === ")") {
            if (stack[stack.length - 1] === "(")
                stack.pop(); // 코드 수정한 부분
            else return false; // 코드 수정한 부분
        } else if (a[i] === "}") {
            if (stack[stack.length - 1] === "{")
                stack.pop(); // 코드 수정한 부분
            else return false; // 코드 수정한 부분
        } else if (a[i] === "]") {
            if (stack[stack.length - 1] === "[")
                stack.pop(); // 코드 수정한 부분
            else return false; // 코드 수정한 부분
        } else continue;
    }
    return stack.length === 0 ? true : false;
}

// 정확성  테스트
// 테스트 1 〉	통과 (6.32ms, 37.1MB)
// 테스트 2 〉	통과 (5.07ms, 36.9MB)
// 테스트 3 〉	통과 (4.19ms, 36.7MB)
// 테스트 4 〉	통과 (5.26ms, 36.7MB)
// 테스트 5 〉	통과 (9.70ms, 37.3MB)
// 테스트 6 〉	통과 (6.68ms, 36.7MB)
// 테스트 7 〉	통과 (7.55ms, 36.8MB)
// 테스트 8 〉	통과 (6.40ms, 37.1MB)
// 테스트 9 〉	통과 (13.01ms, 38MB)
// 테스트 10 〉	통과 (18.68ms, 38.7MB)
// 테스트 11 〉	통과 (18.45ms, 37.6MB)
// 테스트 12 〉	통과 (0.08ms, 33.5MB)
// 테스트 13 〉	통과 (0.13ms, 33.5MB)
// 테스트 14 〉	통과 (0.08ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
