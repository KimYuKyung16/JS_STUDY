const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = Number(input[0]);
const answer=[];
for(let i=1;i<=len;i++){
    let hap = 0;
    for(let j=0;j<input[i].length;j++){
        input[i][j]==="("?hap+=1:hap-=1;
        if(hap<0) break;
    }
    hap===0?answer.push("YES"):answer.push("NO");
}
console.log(answer.join('\n'));


/*
메모리: 9344 KB
시간: 128 ms
*/