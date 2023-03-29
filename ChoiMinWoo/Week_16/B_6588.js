const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let arr = input.split("\n").map(Number);
arr.pop();

//어렵다..

const largestNum = Math.max(...input);
const check = new Array(largestNum + 1).fill(false);
for (let i = 2; i <= largestNum; i++) {
    if (!check[i]) {
        for (let j = i * i; j <= largestNum; j += i) {
            check[j] = true;
        }
    }
}
let result = "";
arr.map((x) => {
    for (let i = 3; i < x; i += 2) {
        if (!check[i] && !check[x - i]) {
            result += `${x} = ${i} + ${x - i}\n`;
            break;
        }
    }
});
console.log(result);

/*
메모리: 63820 KB
시간: 376 ms
*/

// for (let i = 0; i < arr.length; i++) {
//     let a = [];
//     for (let j = 0; j < arr[i]; j++) {
//         if (isPrime(j)) {
//             a.push(j);
//         }
//     }
//     let s = 0;
//     let b = a.length - 1;
//     while (s < b) {
//         let sum = a[s] + a[b];
//         if (sum === arr[i]) {
//             console.log(`${arr[i]} = ${a[s]} + ${a[b]}`);
//             break;
//         } else if (sum < arr[i]) {
//             s++;
//         } else if (sum > arr[i]) {
//             b--;
//         }
//     }
// }

// const max = Math.max(...arr);
// const prime = new Array(max + 1).fill(0);

// for (let i = 0; i < prime.length; i++) {
//     if (isPrime(i)) prime[i] = 1;
// }

// let a = prime.map((a, i) => a === 1 && i).filter((a) => a != false);
// console.log(a);
// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//     let a = [];
//     for (let j = 3; j < prime.length; j++) {
//         for (let k = prime.length; k > 0; k--) {
//             if (prime[j] && prime[k] && j + k === arr[i]) {
//                 a.push(j, k);
//                 break;
//             }
//         }
//         if (a.length == 2) {
//             break;
//         }
//     }
//     answer += `${arr[i]} = ${a[0]} + ${a[1]}\n`;
// }
// console.log(answer.trim());

// let answer = "";
// for (let i = 0; i < arr.length; i++) {
//     let b = arr[i] - 1;
//     let array = [];
//     for (let j = 3; j < b; j += 2) {
//         for (let k = b; k > 3; k -= 2) {
//             if (isPrime(j) && isPrime(k) && j + k === arr[i]) {
//                 array.push(j, k);
//                 break;
//             }
//             if (array.length === 2) break;
//         }
//         if (array.length === 2) break;
//     }
//     answer += `${arr[i]} = ${array[0]} + ${array[1]}\n`;
// }
// console.log(answer);
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

/*
메모리: 9576 KB
시간: 124 ms
*/
