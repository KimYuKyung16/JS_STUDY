let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let array = input[1].split(" ").map(x=>x=Number(x));
let dup=[];         //나온 횟수 저장하는 배열   [3 3 2 1 1 2 3]
for(let i=0;i<array.length;i++){
    let x=0;            // 나온 횟순
    for(let j=0;j<array.length;j++){
        if(array[i]===array[j]){
            x++;
        }
    }x>1?dup.push(x):dup.push(1);
}
let answer=[];
for(let i=0;i<dup.length;i++){
    let count =0;
    for(let j=i+1;j<dup.length;j++){
        if(dup[i]<dup[j]){      // 오른쪽으로 계속 비교
            count++;
        }
    }count===0?answer.push(-1):answer.push(count);
}
console.log(answer)

