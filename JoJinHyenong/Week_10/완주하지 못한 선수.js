function solution(participant, completion) {
    // let answer = participant.filter((item,index)=>{
    //     return completion.includes(item);
    // }); //participant에서 completion의 요소들이 있는것만 추출
    // let dap = answer.filter((item,index)=>{
    //     if(answer.indexOf(item)!==index){
    //         return item;
    //     }
    // });  // 위에서 추출한 요소들중에서 중복된 값이 있으면 추출
    // console.log(answer)
    // if(dap.length>0){   //중복된 값이 있으면 중복된 사람을 리턴
    //     return dap.join('')
    // }else{      //중복된 값이 없으면 particiant에서 completion값이 없는 것을 리턴
    //     return participant.filter((item,index)=>{
    //         return !completion.includes(item);
    //     }).join('');
    // }
    let parsort = participant.sort();
    let comsort = completion.sort();
    for(let i=0;i<participant.length;i++){
        if(parsort[i]!==comsort[i]){
            return parsort[i]
        }
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.7MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.45ms, 33.6MB)
// 테스트 4 〉	통과 (0.61ms, 33.9MB)
// 테스트 5 〉	통과 (0.63ms, 34MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (46.62ms, 47.3MB)
// 테스트 2 〉	통과 (68.39ms, 52.9MB)
// 테스트 3 〉	통과 (91.83ms, 54.8MB)
// 테스트 4 〉	통과 (103.65ms, 58.3MB)
// 테스트 5 〉	통과 (100.25ms, 57.1MB)
// 채점 결과
// 정확성: 58.3
// 효율성: 41.7
// 합계: 100.0 / 100.0