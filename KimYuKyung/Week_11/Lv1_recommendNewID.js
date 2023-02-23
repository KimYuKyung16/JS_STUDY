function solution(new_id) {
  let answer = '';
  const checkEng = /[a-zA-Z]/; // 영어인지 확인
  const checkNum = /[0-9]/; // 숫자인지 확인

  // 1단계: 대문자 -> 소문자로 치환
  new_id = new_id.toLowerCase(); 

  var new_id2 = ''; // 필요없는 문자 제거한 값
  // 2단계: 소문자, 숫자, 빼기, 밑줄, 마침표 빼고 다 제거
  for (word of new_id) {
      if (checkEng.test(word) || checkNum.test(word) || word == '-' || word == '_' || word == '.') { 
          new_id2 += word;
      } 
  }

  var new_id3 = []; // 연속된 . 제거한 값
  // 3단계: 연속 .2개를 1개로 바꾸기
  for (let i=0; i<new_id2.length; i++) {
      if (new_id3.length == 0) { // 아무것도 없으면 일단 추가
          new_id3.push(new_id2[i]);
          continue;
      }
      if (new_id2[i] == '.' && new_id3[new_id3.length-1] == '.') continue;       
      else new_id3.push(new_id2[i]);
  }

  // 4단계 : 양 끝 . 제거
  if (new_id3[new_id3.length-1] == '.') new_id3.pop();
  if (new_id3[0] == '.') new_id3.shift();

  // 5단계: 빈문자열이면 a 대입
  if (new_id3.length == 0)  new_id3.push('a');

  // 6단계: 문자 15개까지만 남기기, 끝에 위치한 마침표 제거
  if (new_id3.length > 15) {
      new_id3 = new_id3.slice(0, 15); 
      if (new_id3[new_id3.length-1] == '.') new_id3.pop();
  }

  // 7단계: 길이 3이 될 때까지 마지막 문자 반복해서 붙이기
  if (new_id3.length < 3) {
      let last_word = new_id3.pop();
      while(new_id3.length < 3) {
          new_id3.push(last_word);
      }
  } 

  answer = new_id3.join(''); // 배열 -> 문자열 변환

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.20ms, 33.6MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.21ms, 33.5MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.5MB)
테스트 6 〉	통과 (0.19ms, 33.5MB)
테스트 7 〉	통과 (0.17ms, 33.4MB)
테스트 8 〉	통과 (0.25ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.5MB)
테스트 10 〉	통과 (0.22ms, 33.5MB)
테스트 11 〉	통과 (0.36ms, 33.4MB)
테스트 12 〉	통과 (0.35ms, 33.5MB)
테스트 13 〉	통과 (0.44ms, 33.5MB)
테스트 14 〉	통과 (0.28ms, 33.5MB)
테스트 15 〉	통과 (0.43ms, 33.6MB)
테스트 16 〉	통과 (0.50ms, 33.5MB)
테스트 17 〉	통과 (0.87ms, 33.5MB)
테스트 18 〉	통과 (0.59ms, 33.5MB)
테스트 19 〉	통과 (1.03ms, 33.6MB)
테스트 20 〉	통과 (0.52ms, 33.5MB)
테스트 21 〉	통과 (0.56ms, 33.6MB)
테스트 22 〉	통과 (0.75ms, 33.5MB)
테스트 23 〉	통과 (0.60ms, 33.6MB)
테스트 24 〉	통과 (0.93ms, 33.6MB)
테스트 25 〉	통과 (0.96ms, 33.5MB)
테스트 26 〉	통과 (0.70ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/