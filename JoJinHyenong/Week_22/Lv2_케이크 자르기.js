// function solution(topping) {
//     let count=0;
//     for(let i=0;i<topping.length-1;i++){
//         let left = topping.slice(0,i+1);        // 앞에서부터 하나씩
//         let right = topping.slice(0+i+1);       // left를 제외하고 나머지
//         if(new Set(left).size===new Set(right).size) count++;
//     }
//     return count;
// }
// function solution(topping) {
//   // 형제의 토핑가짓수를 저장하는 Set과 인덱스에 따른 토핑 가짓수를 저장하는 배열을 선언해 줍니다
//   const [b1Dict, b1Arr, b2Dict, b2Arr] = [new Set(), [], new Set(), []];
//   // 토핑리스트를 순회하며 초기화 해줍니다
//   topping.forEach((item, index) => {

//     b1Dict.add(item);
//     if (index !== 0) b2Dict.add(item);
//     b1Arr.push(b1Dict.size);
//     b2Arr.push(b2Dict.size);
//   });
//   // 누산합을 통해 비교하며 더해줍니다
//     //console.log(b1Arr,b2Arr)
//   return b1Arr.reduce(
//     (acc, cur, i) => (cur === b2Arr.at(-i - 1) ? acc + 1 : acc),
//     0
//   );
// }
function solution(topping) {
  let left = new Map();
  let right = new Map();
  let count = 0;

  topping.forEach((item, index) => {
    right.set(item, (right.get(item) || 0) + 1); // value값이 없으면 0 아니면 +1
  });

  topping.forEach((item, index) => {
    right.set(item, right.get(item) - 1); //right의 아이템과 개수를 하나씩 빼준다.
    left.set(item, (left.get(item) || 0) + 1); //left에는 아이템과 개수를 추가해준다.
    if (right.get(item) === 0) right.delete(item); // right의 아이템개수가 0이 되면 삭제해준다.
    if (right.size === left.size) count++;
  });
  return count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (3.97ms, 35.9MB)
// 테스트 2 〉	통과 (19.56ms, 40.6MB)
// 테스트 3 〉	통과 (11.80ms, 37.2MB)
// 테스트 4 〉	통과 (10.34ms, 37.1MB)
// 테스트 5 〉	통과 (71.95ms, 65.7MB)
// 테스트 6 〉	통과 (134.34ms, 71.5MB)
// 테스트 7 〉	통과 (126.69ms, 71.5MB)
// 테스트 8 〉	통과 (123.82ms, 71.5MB)
// 테스트 9 〉	통과 (137.20ms, 71.3MB)
// 테스트 10 〉	통과 (125.73ms, 71.2MB)
// 테스트 11 〉	통과 (13.70ms, 37MB)
// 테스트 12 〉	통과 (6.01ms, 38.8MB)
// 테스트 13 〉	통과 (137.83ms, 71.2MB)
// 테스트 14 〉	통과 (118.33ms, 71.2MB)
// 테스트 15 〉	통과 (132.09ms, 71.3MB)
// 테스트 16 〉	통과 (113.87ms, 71.3MB)
// 테스트 17 〉	통과 (125.20ms, 71.3MB)
// 테스트 18 〉	통과 (140.45ms, 71.5MB)
// 테스트 19 〉	통과 (157.47ms, 71.5MB)
// 테스트 20 〉	통과 (140.43ms, 71.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
