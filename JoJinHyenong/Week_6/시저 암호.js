function solution(s, n) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") result += " ";
      else {
        let charCode = s.charCodeAt(i);
        // 원래 대문자였는데
        if (charCode <= 90) {
          charCode += n;
          // 변경 후 아스키코드값이 90보다 크다면
          if (charCode > 90) charCode -= 26;
        }
        // 원래 소문자였는데
        else {
          charCode += n;
          // 변경 후 아스키코드값이 122보다 크다면
          if (charCode > 122) charCode -= 26;
        }
        result += String.fromCharCode(charCode);
      }
    }
    return result;
  }

//   정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.13ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.15ms, 33.4MB)
// 테스트 7 〉	통과 (0.14ms, 33.5MB)
// 테스트 8 〉	통과 (0.14ms, 33.6MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.6MB)
// 테스트 11 〉	통과 (0.16ms, 33.5MB)
// 테스트 12 〉	통과 (0.17ms, 33.4MB)
// 테스트 13 〉	통과 (3.97ms, 37.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0