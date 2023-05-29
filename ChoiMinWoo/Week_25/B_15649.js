const fs = require("fs");
const [n, m] = fs
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
const visited = new Array(n).fill(0);
let arr = Array(n)
    .fill()
    .map((v, i) => i + 1);
let selected = [];
let answer = "";
dfs(arr, 0);
console.log(answer);
function dfs(arr, dep) {
    if (dep === m) {
        let result = [];
        for (let i = 0; i < selected.length; i++) result.push(arr[selected[i]]);
        for (let i = 0; i < result.length; i++) answer += result[i] + " ";
        answer += "\n";

        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = 1;
        dfs(arr, dep + 1);
        selected.pop();
        visited[i] = 0;
    }
}
/*
메모리: 9592	 KB
시간: 744 ms
*/
