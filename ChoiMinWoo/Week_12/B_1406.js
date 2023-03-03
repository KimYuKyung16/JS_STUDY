// 시간 초과
// const fs = require("fs");
// const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
// let string = input.shift();
// const [num, ...arr] = input;
// let cursor = string.length;
// for (let i = 0; i < num; i++) {
//     let method = arr[i];
//     if (method === "L") {
//         if (cursor > 0) cursor--;
//     } else if (method === "D") {
//         if (cursor < string.length) cursor++;
//     } else if (method === "B") {
//         if (cursor) {
//             string = string.substring(0, cursor - 1) + string.substring(cursor);
//             cursor--;
//         }
//     } else {
//         let $ = method.split(" ")[1];
//         if (!cursor) string = $ + string.substring(cursor);
//         else
//             string = string.substring(0, cursor) + $ + string.substring(cursor);
//         cursor++;
//     }
// }
// console.log(string);
// 시간 초과
// const fs = require("fs");
// const input = fs.readFileSync("input.txt", "utf-8").trim().split("\r\n");
// const [string, ...arr] = input;
// //커서 위치
// let cursor = string.length;
// let result = string.split("");

// for (const method of arr) {
//     switch (method) {
//         case "L":
//             if (cursor > 0) cursor--;
//             break;
//         case "D":
//             if (cursor < string.length) cursor++;
//             break;
//         case "B":
//             if (cursor) {
//                 result.splice(cursor - 1, 1);
//                 cursor--;
//             }
//             break;
//         default:
//             const [, $] = method.split(" ");
//             result.splice(cursor, 0, $);
//             cursor++;
//             break;
//     }
// }

// console.log(result.join(""));

const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\r\n");
const [string, ...arr] = input;
arr.shift();
//커서 왼쪽
let left = string.split("");
//커서 오른쪽
let right = [];

for (const method of arr) {
    switch (method) {
        case "L":
            //left의 마지막을 right로 옮김으로서 커서를 왼쪽으로
            if (left.length) right.push(left.pop());
            break;
        case "D":
            //right의 마지막을 left로 옮김으로서 커서를 오른쪽으로
            if (right.length) left.push(right.pop());
            break;
        case "B":
            //커서 왼쪽에 있는 문자 pop()
            left.pop();
            break;
        default:
            // p $ 커서 왼쪽에 push
            const [, $] = method.split(" ");
            left.push($);
            break;
    }
}
//push로 배열 뒤쪽 으로 넣었기 때문에 right.reverse()
console.log(left.join("") + right.reverse().join(""));
