function solution(N, road, K) {
  let answer = 0;
  const graph = new Array(N + 1).fill().map(() => []);
  const distance = Array(N + 1).fill(Infinity);
  let q = [];
  road.forEach((v) => {
    let [a, b, c] = v;
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  });
  q.push([1, 0]);
  distance[1] = 0;

  dij();
  for (let i = 0; i <= distance.length; i++) {
    if (distance[i] <= K) answer++;
  }
  function dij() {
    while (q.length) {
      let [cur, cost] = q.shift();
      for (let i = 0; i < graph[cur].length; i++) {
        let [to, cost] = graph[cur][i];
        if (distance[to] > distance[cur] + cost) {
          distance[to] = distance[cur] + cost;
          q.push([to, cost]);
        }
      }
    }
  }
  return answer;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.33ms, 33.5MB)
테스트 2 〉	통과 (0.48ms, 33.5MB)
테스트 3 〉	통과 (0.56ms, 33.6MB)
테스트 4 〉	통과 (0.56ms, 33.7MB)
테스트 5 〉	통과 (0.47ms, 33.4MB)
테스트 6 〉	통과 (0.16ms, 33.4MB)
테스트 7 〉	통과 (0.29ms, 33.5MB)
테스트 8 〉	통과 (0.34ms, 33.5MB)
테스트 9 〉	통과 (0.45ms, 33.5MB)
테스트 10 〉	통과 (0.31ms, 33.5MB)
테스트 11 〉	통과 (0.32ms, 33.5MB)
테스트 12 〉	통과 (0.45ms, 33.6MB)
테스트 13 〉	통과 (0.34ms, 33.6MB)
테스트 14 〉	통과 (9.75ms, 38.4MB)
테스트 15 〉	통과 (17.12ms, 38.5MB)
테스트 16 〉	통과 (0.53ms, 33.4MB)
테스트 17 〉	통과 (0.36ms, 33.5MB)
테스트 18 〉	통과 (1.03ms, 34MB)
테스트 19 〉	통과 (17.85ms, 38.4MB)
테스트 20 〉	통과 (0.94ms, 33.8MB)
테스트 21 〉	통과 (12.20ms, 38.8MB)
테스트 22 〉	통과 (1.75ms, 34.2MB)
테스트 23 〉	통과 (15.55ms, 38.8MB)
테스트 24 〉	통과 (9.73ms, 38.4MB)
테스트 25 〉	통과 (11.65ms, 38.8MB)
테스트 26 〉	통과 (11.51ms, 38.7MB)
테스트 27 〉	통과 (12.50ms, 38.9MB)
테스트 28 〉	통과 (11.96ms, 38.9MB)
테스트 29 〉	통과 (20.05ms, 38.8MB)
테스트 30 〉	통과 (3.97ms, 38.3MB)
테스트 31 〉	통과 (0.48ms, 33.7MB)
테스트 32 〉	통과 (0.51ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
