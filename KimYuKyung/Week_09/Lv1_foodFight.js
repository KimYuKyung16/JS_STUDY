function solution(food) {
  var answer = '';
  let count = [];
  
  for (let i=1; i<food.length; i++) {
      if (food[i]%2 === 0) count.push(food[i]/2);
      else count.push((food[i]-1)/2);
  }
  
  for (let i=0; i<count.length+1; i++) {
      if (i === food.length-1) {
          let copy = [...answer.split('')].reverse();
          answer += (0 + copy.join(''));
      } 
      if (count[i]) answer += String(i+1).repeat(count[i]);
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.20ms, 33.4MB)
테스트 2 〉	통과 (0.18ms, 33.4MB)
테스트 3 〉	통과 (0.17ms, 33.4MB)
테스트 4 〉	통과 (0.29ms, 33.6MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.24ms, 33.3MB)
테스트 7 〉	통과 (0.28ms, 33.1MB)
테스트 8 〉	통과 (0.19ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.5MB)
테스트 10 〉	통과 (0.14ms, 33.4MB)
테스트 11 〉	통과 (0.06ms, 33.5MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (0.79ms, 33.7MB)
테스트 15 〉	통과 (0.07ms, 33.4MB)
테스트 16 〉	통과 (0.06ms, 33.4MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.07ms, 33.5MB)
테스트 19 〉	통과 (0.07ms, 33.4MB)
테스트 20 〉	통과 (0.07ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/