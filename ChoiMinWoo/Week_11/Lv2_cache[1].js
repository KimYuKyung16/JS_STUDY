function solution(cacheSize, cities) {
    const cache = [];
    let answer = 0;
    cities = cities.map((a) => a.toLowerCase());
    for (let i = 0; i < cities.length; i++) {
        if (cache.length >= cacheSize) {
            if (cache.includes(cities[i])) {
                answer += 1;
                cache.splice(cache.indexOf(cities[i]), 1);
                cache.push(cities[i]);
            } else {
                answer += 5;
                if (cacheSize != 0) {
                    cache.splice(0, 1);
                    cache.push(cities[i]);
                }
            }
        } else {
            if (cache.includes(cities[i])) {
                answer += 1;
                cache.splice(cache.indexOf(cities[i]), 1);
                cache.push(cities[i]);
            } else {
                answer += 5;
                cache.push(cities[i]);
            }
        }
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)
// 테스트 8 〉	통과 (0.17ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.6MB)
// 테스트 10 〉	통과 (0.22ms, 33.5MB)
// 테스트 11 〉	통과 (57.98ms, 47MB)
// 테스트 12 〉	통과 (0.19ms, 33.5MB)
// 테스트 13 〉	통과 (0.22ms, 33.5MB)
// 테스트 14 〉	통과 (0.24ms, 33.6MB)
// 테스트 15 〉	통과 (0.27ms, 33.6MB)
// 테스트 16 〉	통과 (0.30ms, 33.5MB)
// 테스트 17 〉	통과 (0.28ms, 33.5MB)
// 테스트 18 〉	통과 (0.46ms, 33.5MB)
// 테스트 19 〉	통과 (0.60ms, 33.6MB)
// 테스트 20 〉	통과 (0.55ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
