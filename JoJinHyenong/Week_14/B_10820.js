let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.forEach(item => {
    let lower = 0;
    let upper = 0;
    let digit = 0;
    let space = 0;
  
    for (let i = 0; i < item.length; i++) {
      if (/[a-z]/.test(item[i])) lower++;
      else if (/[A-Z]/.test(item[i])) upper++;
      else if (/[0-9]/.test(item[i])) digit++;
      else if (/\s/.test(item[i])) space++;
    }
    console.log(`${lower} ${upper} ${digit} ${space}`);
  });

