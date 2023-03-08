let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var cases = Number(input[0]);
var deque = [];
var answer = [];

for(var i=1; i<=cases; i++){
    if(input[i].split(' ').length === 1){
        if(input[i] === 'size'){
            answer.push(deque.length);
        }else if(input[i] === 'empty'){
            if(deque.length === 0){
                answer.push(1);
            }else{
                answer.push(0);
            }
        }else if(input[i] === 'front'){
            if(deque.length === 0){
                answer.push(-1)
            }else{
                answer.push(deque[0])
            }
        }else if(input[i] === 'back'){
            if(deque.length === 0){
                answer.push(-1);
            }else{
                answer.push(deque[deque.length-1])
            }
        }else if(input[i] === 'pop_front'){
            if(deque.length === 0){
                answer.push(-1);
            }else{
                answer.push(deque.shift());
            }
        }else if(input[i] === 'pop_back'){
            if(deque.length === 0){
                answer.push(-1)
            }else{
                answer.push(deque.pop())
            }
        }
    }else{
        if(input[i].split(' ')[0] === 'push_front'){
            deque.unshift(input[i].split(' ')[1]);
        }else{
            deque.push(input[i].split(' ')[1]);
        }
    }
}
console.log(answer.join('\n'));

/*
메모리: 12056 KB
시간: 148 ms
*/