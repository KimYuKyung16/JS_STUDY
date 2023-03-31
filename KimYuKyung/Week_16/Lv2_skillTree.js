function solution(skill, skill_trees) {
  let answer = 0;
  
  skill = skill.split('');
  
  for (let i=0; i<skill_trees.length; i++) {
      let array = skill_trees[i].split('');
      let result = array.map((x) => {
          if (!skill.includes(x)) return ''
          else return skill.indexOf(x);
      })
      
      if (result.join('') === '') answer++;
      else {
          result = result.filter((x) => x !== '');
          let flag = true;
          for (let i=0; i<result.length; i++) {
              if (result[i] === i) continue;
              else {
                  flag = false;
                  break;
              }
          }
          if (flag) answer++;
      }
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.17ms, 33.6MB)
테스트 2 〉	통과 (0.19ms, 33.7MB)
테스트 3 〉	통과 (0.18ms, 33.6MB)
테스트 4 〉	통과 (0.19ms, 33.6MB)
테스트 5 〉	통과 (0.20ms, 33.6MB)
테스트 6 〉	통과 (0.20ms, 33.5MB)
테스트 7 〉	통과 (0.23ms, 33.2MB)
테스트 8 〉	통과 (0.22ms, 33.1MB)
테스트 9 〉	통과 (0.30ms, 33.5MB)
테스트 10 〉	통과 (0.21ms, 33.5MB)
테스트 11 〉	통과 (0.21ms, 33.4MB)
테스트 12 〉	통과 (0.22ms, 33.5MB)
테스트 13 〉	통과 (0.20ms, 33.4MB)
테스트 14 〉	통과 (0.18ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/