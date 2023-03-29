function solution(skill, skill_trees) {
    var answer = 0;
    let array = skill.split("");

    skill_trees.forEach((a) => {
        let ox = 1;
        for (let i = 0; i < array.length; i++) {
            //skill을 읽으면서 해당 스킬의 인덱스를 left와 right를 통해 비교  *해당 알파뱃이 없을 경우 30으로 만듬
            let left = a.indexOf(array[i]) === -1 ? 30 : a.indexOf(array[i]);
            let right =
                a.indexOf(array[i + 1]) === -1 ? 30 : a.indexOf(array[i + 1]);
            if (left > right) {
                //왼쪽의 인덱스값이 크면 잘 못 찍은 것이므로 ox=0으로 만들고 반복문 탈출
                ox = 0;
                break;
            }
        }
        ox && answer++;
    });
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.18ms, 33.6MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.5MB)
// 테스트 7 〉	통과 (0.17ms, 33.5MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)
// 테스트 9 〉	통과 (0.17ms, 33.7MB)
// 테스트 10 〉	통과 (0.18ms, 33.4MB)
// 테스트 11 〉	통과 (0.17ms, 33.4MB)
// 테스트 12 〉	통과 (0.18ms, 33.5MB)
// 테스트 13 〉	통과 (0.17ms, 33.5MB)
// 테스트 14 〉	통과 (0.18ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
