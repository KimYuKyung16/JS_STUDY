function solution(cards1, cards2, goal) {
  let slicedArray = goal;
  for (let i=0; i<cards2.length; i++) {
      if (slicedArray.includes(cards2[i])) {
          slicedArray = slicedArray.slice(slicedArray.indexOf(cards2[i])+1);
          goal[goal.indexOf(cards2[i])] = '';
      }
  }

  goal = goal.filter((x) => x !== '');

  for (let i=0; i<cards1.length; i++) {
      if (goal[0] === cards1[i]) goal.splice(0, 1);
  } 
  
  return goal.length ? 'No' : 'Yes';
}

/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.3MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.3MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.09ms, 33.4MB)
테스트 10 〉	통과 (0.08ms, 33.4MB)
테스트 11 〉	통과 (0.07ms, 33.3MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.3MB)
테스트 14 〉	통과 (0.07ms, 32.9MB)
테스트 15 〉	통과 (0.08ms, 33.1MB)
테스트 16 〉	통과 (0.15ms, 33.4MB)
테스트 17 〉	통과 (0.16ms, 33.5MB)
테스트 18 〉	통과 (0.15ms, 33.4MB)
테스트 19 〉	통과 (0.07ms, 33.3MB)
테스트 20 〉	통과 (0.07ms, 33.4MB)
테스트 21 〉	통과 (0.07ms, 33.4MB)
테스트 22 〉	통과 (0.15ms, 33.5MB)
테스트 23 〉	통과 (0.07ms, 33.4MB)
테스트 24 〉	통과 (0.07ms, 33.3MB)
테스트 25 〉	실패 (0.07ms, 33.5MB)
채점 결과
정확성: 96.0
합계: 96.0 / 100.0
*/