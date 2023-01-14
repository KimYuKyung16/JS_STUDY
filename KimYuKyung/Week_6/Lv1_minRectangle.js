function solution(sizes) {
  const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
      if (w > maxSize[0]) maxSize[0] = w;
      if (h > maxSize[1]) maxSize[1] = h;
  })
  return maxSize[0]*maxSize[1];
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 29.5MB)
테스트 2 〉	통과 (0.12ms, 29.9MB)
테스트 3 〉	통과 (0.12ms, 30MB)
테스트 4 〉	통과 (0.18ms, 30MB)
테스트 5 〉	통과 (0.13ms, 29.6MB)
테스트 6 〉	통과 (0.12ms, 29.7MB)
테스트 7 〉	통과 (0.15ms, 30MB)
테스트 8 〉	통과 (0.16ms, 29.9MB)
테스트 9 〉	통과 (0.15ms, 29.9MB)
테스트 10 〉	통과 (0.17ms, 30.2MB)
테스트 11 〉	통과 (0.19ms, 29.8MB)
테스트 12 〉	통과 (0.25ms, 29.9MB)
테스트 13 〉	통과 (0.64ms, 30.1MB)
테스트 14 〉	통과 (1.04ms, 30MB)
테스트 15 〉	통과 (25.68ms, 33MB)
테스트 16 〉	통과 (24.57ms, 34MB)
테스트 17 〉	통과 (25.25ms, 34.7MB)
테스트 18 〉	통과 (25.37ms, 35.1MB)
테스트 19 〉	통과 (5.66ms, 34.7MB)
테스트 20 〉	통과 (6.22ms, 35.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/