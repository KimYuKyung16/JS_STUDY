const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
let s = new Array(20).fill(0);

for (let i = 0; i < arr.length; i++) {
  let [cal, n] = arr[i].split(" ");
  switch (cal) {
    case "add":
      s[n - 1] = 1;
      break;
    case "remove":
      s[n - 1] = 0;
      break;
    case "check":
      if (s[n - 1]) console.log("1");
      else console.log("0");
      break;
    case "toggle":
      if (s[n - 1]) s[n - 1] = 0;
      else s[n - 1] = 1;
      break;
    case "all":
      s.fill(1);
      break;
    case "empty":
      s.fill(0);
      break;
  }
}

/*
메모리: 9960	 KB
시간: 188	 ms
*/
