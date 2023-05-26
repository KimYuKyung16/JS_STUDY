let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);
const [E, S, M] = input;
let y = 1;
while (1) {
  if ((y - E) % 15 === 0 && (y - S) % 28 === 0 && (y - M) % 19 === 0) {
    //
    console.log(y);
    break;
  } else {
    y++;
  }
}
