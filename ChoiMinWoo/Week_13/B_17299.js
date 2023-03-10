//조금 더 고민..
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;
const stack = [];
const result = [];
