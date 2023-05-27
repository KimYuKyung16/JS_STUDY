function solution(maps) {
  let [ylen, xlen] = [maps.length, maps[0].length];
  let visited = new Array(ylen).fill(0).map(() => new Array(xlen).fill(0));
  let answer = [];
  
  maps = maps.map((x) => x.split(''));
  
  const direction = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
  ]
  
  for (let y=0; y<ylen; y++) {
      for (let x=0; x<xlen; x++) {
          let sum = 0;
          if (maps[y][x] !== 'X' && visited[y][x] === 0) {
              dfs(y, x);
              answer.push(sum);
              
              function dfs(y, x) {
                  if (y < 0 || y >= ylen || x < 0 || x >= xlen) return;
                  if (visited[y][x] === 1) return;
                  
                  sum += +maps[y][x];
                  visited[y][x] = 1;

                  for (let i=0; i<4; i++) {
                      let [ny, nx] = [y+direction[i][0], x+direction[i][1]];
                      if (ny < 0 || ny >= ylen || nx < 0 || nx >= xlen) continue;
                      if (maps[ny][nx] === 'X') continue;

                      dfs(ny, nx);
                  }
              }
          }
      }
  }
  
  return answer.length ? answer.sort((a,b) => a-b) : [-1];
}

/*
정확성  테스트
테스트 1 〉	통과 (0.12ms, 33.5MB)
테스트 2 〉	통과 (0.34ms, 33.5MB)
테스트 3 〉	통과 (0.37ms, 33.5MB)
테스트 4 〉	통과 (0.60ms, 33.6MB)
테스트 5 〉	통과 (3.98ms, 37.4MB)
테스트 6 〉	통과 (3.48ms, 38MB)
테스트 7 〉	통과 (3.63ms, 37.5MB)
테스트 8 〉	통과 (5.26ms, 38.2MB)
테스트 9 〉	통과 (12.04ms, 38.6MB)
테스트 10 〉	통과 (7.07ms, 38.3MB)
테스트 11 〉	통과 (7.62ms, 38.3MB)
테스트 12 〉	통과 (8.13ms, 38.8MB)
테스트 13 〉	통과 (9.92ms, 38.8MB)
테스트 14 〉	통과 (8.77ms, 38.4MB)
테스트 15 〉	통과 (12.74ms, 39.3MB)
테스트 16 〉	통과 (14.31ms, 39MB)
테스트 17 〉	통과 (0.89ms, 33.7MB)
테스트 18 〉	통과 (14.43ms, 39.2MB)
테스트 19 〉	통과 (20.00ms, 40.5MB)
테스트 20 〉	통과 (1.65ms, 34.1MB)
테스트 21 〉	통과 (1.83ms, 36.7MB)
테스트 22 〉	통과 (0.46ms, 33.6MB)
테스트 23 〉	통과 (8.13ms, 37.7MB)
테스트 24 〉	통과 (11.56ms, 38.2MB)
테스트 25 〉	통과 (0.66ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/