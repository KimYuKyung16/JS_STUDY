function solution(new_id) {
    let answer = "";

    //1
    new_id = new_id.toLowerCase();
    //2
    new_id = new_id.replace(/[^a-z0-9-_.]/g, "");

    //3
    for (let i = 0; i < new_id.length; i++) {
        if (new_id[i] === new_id[i + 1] && new_id[i] === ".") {
            new_id = new_id.substr(0, i) + new_id.substr(i + 1, new_id.length);
            i--;
        }
    }
    //4
    if (new_id[0] === ".") new_id = new_id.substr(1, new_id.length);
    if (new_id[new_id.length - 1] === ".")
        new_id = new_id.substr(0, new_id.length - 1);

    //5
    if (!new_id) new_id = "a";
    //6
    if (new_id.length > 15) new_id = new_id.substr(0, 15);
    if (new_id[new_id.length - 1] === ".")
        new_id = new_id.substr(0, new_id.length - 1);

    //7
    if (new_id.length < 3)
        new_id = (new_id + new_id[new_id.length - 1].repeat(2)).substr(0, 3);
    return new_id;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	통과 (0.15ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.6MB)
// 테스트 10 〉	통과 (0.09ms, 33.5MB)
// 테스트 11 〉	통과 (0.10ms, 33.5MB)
// 테스트 12 〉	통과 (0.24ms, 33.5MB)
// 테스트 13 〉	통과 (0.15ms, 33.4MB)
// 테스트 14 〉	통과 (0.14ms, 33.5MB)
// 테스트 15 〉	통과 (0.15ms, 33.4MB)
// 테스트 16 〉	통과 (0.23ms, 33.6MB)
// 테스트 17 〉	통과 (0.26ms, 33.6MB)
// 테스트 18 〉	통과 (0.43ms, 33.5MB)
// 테스트 19 〉	통과 (0.44ms, 33.7MB)
// 테스트 20 〉	통과 (0.38ms, 33.5MB)
// 테스트 21 〉	통과 (0.41ms, 33.7MB)
// 테스트 22 〉	통과 (0.24ms, 33.5MB)
// 테스트 23 〉	통과 (0.34ms, 33.6MB)
// 테스트 24 〉	통과 (0.24ms, 33.4MB)
// 테스트 25 〉	통과 (0.33ms, 33.6MB)
// 테스트 26 〉	통과 (0.34ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
