function solution(n) {
  n = String(n).split('')
  n.reverse()
  
  let result = n.map((x) => {
      return Number(x)
  })
  
  return result;
}