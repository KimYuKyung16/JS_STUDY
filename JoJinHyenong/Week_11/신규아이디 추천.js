function solution(new_id) {
    new_id = new_id.toLowerCase().match(/[a-z0-9-_.]/g).join('');   //해당 문자만 추출
    new_id = new_id.replace(/\.+/g,'.');    // .으로 연속된 문자 .으로 대체
    new_id = new_id.replace(/\.$/g,'');     // .으로 끝나면 맨 뒤.삭제
    new_id = new_id.replace(/^\./g,'');     // .으로 시작되면 맨 앞.삭제
    if(new_id===''){    // 빈칸일 경우
        new_id+="a";
    }else if(new_id.length>=16){    // 문자열 길이가 16자 이상일 경우
        new_id = new_id.slice(0,15);
        if(new_id[new_id.length-1]==="."){
            new_id = new_id.slice(0,14);
        }
    }
    if(new_id.length<=2){   // 문자열 길이가 2자 이하일 경우
        for(let i=0;i<=3-new_id.length;i++){
            new_id+=new_id[new_id.length-1];
        } 
    }
    return new_id;

}

// 정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 33.4MB)
// 테스트 2 〉	통과 (0.37ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.4MB)
// 테스트 4 〉	통과 (0.22ms, 33.4MB)
// 테스트 5 〉	통과 (0.23ms, 33.4MB)
// 테스트 6 〉	통과 (0.16ms, 33.4MB)
// 테스트 7 〉	통과 (0.16ms, 33.4MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.17ms, 33.5MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)
// 테스트 11 〉	통과 (0.22ms, 33.4MB)
// 테스트 12 〉	통과 (0.23ms, 33.4MB)
// 테스트 13 〉	통과 (0.20ms, 33.4MB)
// 테스트 14 〉	통과 (0.22ms, 33.5MB)
// 테스트 15 〉	통과 (0.33ms, 33.4MB)
// 테스트 16 〉	통과 (0.37ms, 33.5MB)
// 테스트 17 〉	통과 (0.24ms, 33.5MB)
// 테스트 18 〉	통과 (0.26ms, 33.5MB)
// 테스트 19 〉	통과 (0.60ms, 33.6MB)
// 테스트 20 〉	통과 (0.22ms, 33.5MB)
// 테스트 21 〉	통과 (0.27ms, 33.5MB)
// 테스트 22 〉	통과 (0.28ms, 33.6MB)
// 테스트 23 〉	통과 (0.36ms, 33.7MB)
// 테스트 24 〉	통과 (0.27ms, 33.7MB)
// 테스트 25 〉	통과 (0.43ms, 33.6MB)
// 테스트 26 〉	통과 (0.26ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0