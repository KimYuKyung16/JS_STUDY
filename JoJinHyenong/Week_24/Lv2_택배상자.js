function solution(order) {
  let array = [1, 2, 3, 4, 5];
  let stack = []; // 보조 컨테이너 벨트
  let count = 0;
  for (let i = 0; i < 5; i++) {
    // order의 첫번째 요소가 나올때 까지 반복
    if (order[0] === i) {
      array.push(stack.pop());
      break;
    } else stack.push(array.shift());
  }
  console.log(stack, array);
  console.log(stack[stack.length - 1], array[array.length - 1]);
  for (let i = 0; i < order.length; i++) {
    if (
      order[i] === stack[stack.length - 1] ||
      order[i] === array[array.length - 1]
    ) {
      count++;
      order[i] === stack[stack.length - 1] ? stack.pop() : array.pop();
    } else {
      break;
    }
  }
  return count;
}
// 실패
