const fs = require("fs");
const [a, arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);

/*
메모리: 16956	 KB
시간: 200	 ms
*/
