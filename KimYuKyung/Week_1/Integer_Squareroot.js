function solution(n) {   
  let sqrtnum = Math.sqrt(n);
  
  if (sqrtnum === parseInt(sqrtnum)) {
      return Math.pow(sqrtnum + 1, 2)
  } else {
      return -1
  }
}