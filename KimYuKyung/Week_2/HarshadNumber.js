function solution(x) {
  sumN = String(x).split('').reduce((acc, cur) => acc + Number(cur), 0);
  
  if (x % sumN === 0) return true;
  else return false;
}