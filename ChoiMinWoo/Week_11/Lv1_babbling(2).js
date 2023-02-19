function solution(babbling) {
    let answer = 0;
    for (let i = 0; i < babbling.length; i++) {
        test(babbling[i]) && answer++;
    }
    return answer;
}
function test(word) {
    let no = ["ayaaya", "yeye", "woowoo", "mama"];
    let nop = ["aya", "ye", "woo", "ma"];
    let newword = word
        .replace(/\ye/g, "A")
        .replace(/\woo/g, "A")
        .replace(/\aya/g, "A")
        .replace(/\ma/g, "A");
    newword = newword.replace(/\A/g, "");
    if (newword) return false;
    for (let i = 0; i < no.length; i++) {
        for (let j = 0; j < 16; j++) {
            if (word.includes(no[i])) return false;
            no[i] += nop[i];
        }
    }

    return true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.28ms, 33.5MB)
// 테스트 2 〉	통과 (0.26ms, 33.6MB)
// 테스트 3 〉	통과 (0.38ms, 33.6MB)
// 테스트 4 〉	통과 (0.26ms, 33.5MB)
// 테스트 5 〉	통과 (0.26ms, 33.5MB)
// 테스트 6 〉	통과 (0.27ms, 33.4MB)
// 테스트 7 〉	통과 (0.26ms, 33.5MB)
// 테스트 8 〉	통과 (0.27ms, 33.5MB)
// 테스트 9 〉	통과 (0.18ms, 33.5MB)
// 테스트 10 〉	통과 (0.17ms, 33.5MB)
// 테스트 11 〉	통과 (0.30ms, 33.5MB)
// 테스트 12 〉	통과 (0.42ms, 33.5MB)
// 테스트 13 〉	통과 (0.43ms, 33.6MB)
// 테스트 14 〉	통과 (0.59ms, 33.6MB)
// 테스트 15 〉	통과 (0.46ms, 33.5MB)
// 테스트 16 〉	통과 (0.43ms, 33.5MB)
// 테스트 17 〉	통과 (0.76ms, 33.7MB)
// 테스트 18 〉	통과 (0.66ms, 33.7MB)
// 테스트 19 〉	통과 (0.28ms, 33.4MB)
// 테스트 20 〉	통과 (0.33ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
