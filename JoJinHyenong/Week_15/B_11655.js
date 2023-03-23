let input = require('fs').readFileSync('example.txt').toString().split('\n');
let words = input[0];
let answer = '';

for(let i = 0; i < words.length; i++){
   if('A' <= words[i] && words[i] <= 'Z'){
        nums = words.charCodeAt(i) +13;
        if(nums> 90){   //90을 넘어가면 다시 처음부터
            nums -= 26;
        }
        answer += String.fromCharCode(nums);
    } else if( 'a' <= words[i] && words[i] <= 'z' ){
        nums = words.charCodeAt(i) + 13;
        if(nums > 122){
            nums -= 26;
        }
        answer += String.fromCharCode(nums);
    } else {
        answer += words[i];
    }
}
console.log(answer)

/*
메모리: 9332 KB
시간: 128 ms
*/