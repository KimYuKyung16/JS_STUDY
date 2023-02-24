function solution(cards1, cards2, goal) {
    let answer1 = goal.filter(item => cards1.includes(item));   // goal에서 card1의 요소를 순서대로 추출한다.
    let answer2 = goal.filter(item => cards2.includes(item));
    cards1.every((item,index)=>{        // 추출한것과 순서가 같으면 goal에서 제거
        if(item===answer1[index]) goal.splice(goal.indexOf(item),1);
        return goal;
    });
    cards2.every((item,index)=>{
        if(item===answer2[index]) goal.splice(goal.indexOf(item),1); 
        return goal;
    });
    return goal.length?"No":"Yes";  // 제거를 다 한후 요소가 있으면 "No"
    
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.12ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.5MB)
// 테스트 6 〉	통과 (0.18ms, 33.6MB)
// 테스트 7 〉	통과 (0.09ms, 33.5MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.18ms, 33.5MB)
// 테스트 10 〉	통과 (0.22ms, 33.4MB)
// 테스트 11 〉	통과 (0.18ms, 33.6MB)
// 테스트 12 〉	통과 (0.17ms, 33.4MB)
// 테스트 13 〉	통과 (0.17ms, 33.6MB)
// 테스트 14 〉	통과 (0.25ms, 33.5MB)
// 테스트 15 〉	통과 (0.17ms, 33.4MB)
// 테스트 16 〉	통과 (0.17ms, 33.6MB)
// 테스트 17 〉	통과 (0.25ms, 33.5MB)
// 테스트 18 〉	통과 (0.19ms, 33.6MB)
// 테스트 19 〉	통과 (0.17ms, 33.4MB)
// 테스트 20 〉	통과 (0.17ms, 33.5MB)
// 테스트 21 〉	통과 (0.19ms, 33.5MB)
// 테스트 22 〉	통과 (0.20ms, 33.6MB)
// 테스트 23 〉	통과 (0.17ms, 33.5MB)
// 테스트 24 〉	통과 (0.13ms, 33.6MB)
// 테스트 25 〉	통과 (0.08ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0