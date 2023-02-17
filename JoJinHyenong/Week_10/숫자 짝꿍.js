function solution(X, Y) {
    var answer = [];
    let array_x = X.split('');
    let array_y = Y.split('');
    for(let i=0, len=X.length;i<len;i++){
        if(array_y.indexOf(array_x[i])>=0){
            answer.push(array_y.splice(array_y.indexOf(array_x[i]),1));
           }
    }
    answer = answer.flat();
    if(answer[0]==='0'){
        return '0';
    }
    else if(answer.length===0){
        return "-1";
    }else{
        return answer.sort((a,b)=>b-a).join('');
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.7MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.10ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.62ms, 33.7MB)
// 테스트 7 〉	통과 (0.39ms, 33.5MB)
// 테스트 8 〉	통과 (0.64ms, 33.6MB)
// 테스트 9 〉	통과 (0.57ms, 33.6MB)
// 테스트 10 〉	통과 (0.99ms, 33.7MB)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (시간 초과)
// 테스트 14 〉	실패 (시간 초과)
// 테스트 15 〉	실패 (시간 초과)
// 테스트 16 〉	통과 (0.07ms, 33.5MB)
// 테스트 17 〉	통과 (0.09ms, 33.6MB)
// 테스트 18 〉	통과 (0.08ms, 33.5MB)
// 테스트 19 〉	통과 (0.06ms, 33.5MB)
// 채점 결과
// 정확성: 73.7
// 합계: 73.7 / 100.0