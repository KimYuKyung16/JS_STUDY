function solution(maps) {
    let n = maps.length-1;
    let m = maps[0].length-1;
    let dx = [-1,0,1,0];    // 행 이동
    let dy = [0,1,0,-1];    // 열 이동
    let count=1;            // 이동 할 때마다 +1
    let answer=[];         
    function dfs(x,y){
        if(x===n&&y===m) answer.push(count);    // 도착했을 경우 이동거리 push
        else{
            for(let i=0;i<4;i++){   // 상,하,좌,우 확인
                let nx = x+dx[i];
                let ny = y+dy[i];
                if(nx>=0&&nx<=n&&ny>=0&&ny<=m&&maps[nx][ny]===1){   // 이동할 곳이 맵의 범위내에 있고 아직 이동하지 않은 곳인지 확인
                    maps[nx][ny]=0;     // 이동한 거리 다시 못돌아오게 바꿈
                    count++;
                    dfs(nx,ny);
                    maps[nx][ny]=1;
                    count--;
                }
            }
        }
    }maps[0][0]=0;     
    dfs(0,0);
    return answer.length?Math.min(...answer):-1;
}