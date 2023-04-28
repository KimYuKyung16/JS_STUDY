function solution(numbers) {
  //console.log((1001).toString(2), 2**0)

  return numbers.map((v, i) => {
    let toStr = v.toString(2).split("").reverse().indexOf("0");
    if (toStr === -1) return v + 2 ** (v.toString(2).length - 1);
    return v + Math.ceil(2 ** (toStr - 1));
  });
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.70ms, 33.8MB)
// 테스트 2 〉	통과 (60.13ms, 50.9MB)
// 테스트 3 〉	통과 (0.28ms, 33.6MB)
// 테스트 4 〉	통과 (0.89ms, 33.7MB)
// 테스트 5 〉	통과 (1.04ms, 33.9MB)
// 테스트 6 〉	통과 (0.78ms, 33.7MB)
// 테스트 7 〉	통과 (320.57ms, 58.1MB)
// 테스트 8 〉	통과 (273.31ms, 58.6MB)
// 테스트 9 〉	통과 (231.07ms, 58MB)
// 테스트 10 〉	통과 (216.55ms, 59.2MB)
// 테스트 11 〉	통과 (257.11ms, 59MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
