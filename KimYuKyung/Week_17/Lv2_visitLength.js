// 못 푼 문제

function solution(dirs) {
  var answer = 0;
  let current = [0, 0];
  let array = [];
  
  const command = {L: [-1, 0], R:[1, 0], U: [0, 1], D: [0, -1]};
  
  for (let d of dirs) {
      let pre = [...current];
      if (d === 'U' && current[1] + command.U[1] < 5) {
          current[1] = current[1] + command.U[1];      
      } 
      if (d === 'D' && current[1] + command.D[1] > -5) {
          current[1] = current[1] + command.D[1];
      }
      if (d === 'L' && current[0] + command.L[0] > -5) {
          current[0] = current[0] + command.L[0];
      } 
      if (d === 'R' && current[0] + command.R[0] < 5) {
          current[0] = current[0] + command.R[0];
      }
      
      array.push([current[0]-pre[0], current[1]-pre[1]]);        
  }

  console.log(array)
}