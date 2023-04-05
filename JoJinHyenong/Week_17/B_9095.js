const input = require('fs').readFileSync('example.txt').toString().split("\n").map((item)=>Number(item));

let num = input[0];
let arr = [0,1,2,4];
for(let i=0;i<=num;i++){
    let x = input[i];
    for(let j=4;j<=x;j++){
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3];
    }
    console.log(arr[x]);
}
// n이 3이후 부터는 이전값 3개를 연속해서 더해야 정답이 나온다.