let input = require('fs').readFileSync('example.txt').toString().trim().split('');
let sticks= [];         // 중첩된 막대기의 개수
let answer=0;

for(let i=0;i<input.length;i++){
    const string = input[i];        //여는 괄호인지 닫는 괄호인지 확인
    if(string === '('&& input[i+1]===")"){      // "()":레이저가 쏴지면 중첩된 막대기 개수만큼 annswer증가
        answer+=sticks.length;
        i+=1;       // 한칸 건너뛰기
    }else if(string==="("){         // "("이면 중첩된 막대기 개수가 증가한다는 뜻
        sticks.push(string);
    }else if(string===")"){         // ")"이면 스틱배열에서 하나를 빼주고 막대기가 하나 사라졌으니깐 +1해줌
        sticks.pop();
        answer+=1;
    }
}console.log(answer)

/*
메모리: 13288 KB
시간: 376 ms
*/