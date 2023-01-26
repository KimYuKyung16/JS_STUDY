function solution(array, commands) {
    let newarray=[];
    for(let i=0;i<commands.length;i++){
        newarray.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b));
    }
    return newarray.map((item,index)=>{
            return newarray[index][commands[index][2]-1]
        })
}


// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.7MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.6MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.10ms, 33.7MB)
// 테스트 6 〉	통과 (0.07ms, 33.6MB)
// 테스트 7 〉	통과 (0.08ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0