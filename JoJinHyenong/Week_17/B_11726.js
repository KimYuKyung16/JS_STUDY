let input = require('fs').readFileSync('example.txt').toString();
const dp = [0,1,2];
for(let i=3;i<=input;i++){
    dp[i]=(dp[i-1]+dp[i-2])%10007;
}
console.log(dp[input]);
// 왜 실패가 뜨는 거죠...?