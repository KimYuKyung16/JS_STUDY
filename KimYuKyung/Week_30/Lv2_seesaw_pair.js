function solution(weights) {
  let answer = 0;
  const store = {};
  const cal = [1, 3/2, 2, 4/3]; //경우의 수 (1,1), (2,3), (2,4), (3,4)

  // 내림차순을 해야 store에 값이 들어가 있을 때 계산할 수 있게 됨.
  weights.sort((a,b)=> b - a).forEach((w) => { // 내림차순 정렬
      let s;
      cal.forEach((i)=>{
          s = w * i;
          if(store[s]){ //해당 비율을 곱한 값이 store에 존재할 경우, if (s = w * i, store[s]) -> 원래 코드
              answer += store[s];
          }
      });
      if (!store[w]) store[w] = 1;
      else store[w]++;
  });
  return answer;
}