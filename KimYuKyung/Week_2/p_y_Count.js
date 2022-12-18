function solution(s){
  let pcount = 0, ycount = 0;
  
  for (i of s.toLowerCase()) {
      if (i === 'p') pcount ++;
      if (i === 'y') ycount ++; 
  }

  if (pcount === ycount) return true;
  else return false; 
}