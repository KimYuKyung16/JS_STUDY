// const fs = require("fs");
// const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
// let [num, arr] = input;
// let array = arr.split(" ").map(Number);
// let answer = [];
// for (let i = 0; i < array.length; i++) {
//     let a = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] > a) {
//             answer.push(array[j]);
//             break;
//         }
//     }
//     if (i + 1 != answer.length) answer.push(-1);
// }
// console.log(...answer);
// 시간 초과

// const fs = require("fs");
// const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
// const [num, arr] = input;
// const array = arr.split(" ").map(Number);
// const answer = [];
// for (let i = 0; i < num; i++) {
//     const newArray = array.slice(i + 1).filter((item) => item > array[i]);

//     if (newArray.length) {
//         answer.push(newArray[0]);
//     } else {
//         answer.push(-1);
//     }
// }
// console.log(...answer);
// 메모리 초과

//조금 더 고민..
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let [num, arr] = input;
let array = arr.split(" ").map(Number);
let answer = new Array(+num).fill(-1);
let stack = [];
for (let i = 0; i < num; i++) {
    while (stack.length && array[i] > array[stack[stack.length - 1]]) {
        answer[stack.pop()] = array[i];
    }
    stack.push(i);
}
console.log(...answer);
