const input = require('fs').readFileSync('example.txt').toString().trim();
let fac = BigInt(1);
for(let i=1;i<=(Number(input));i++){      //팩토리얼 한 값을 구한다
    fac*=BigInt(i);
}
fac = String(fac).split('');
let answer=0;
while(true){
    let last = fac.pop(); //뒤에서부터 하나씩 빼면서 검사
    if(last==="0") answer++;
    else break;
}
console.log(Number(input)===0?1:answer);
