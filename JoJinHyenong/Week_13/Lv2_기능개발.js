function solution(progresses, speeds) {
    let array =[];      // 서비스를 배포가능 한 정도까지의 작업일수
    for(let i=0;i<progresses.length;i++){
        let day=0;              //작업일수
        while(progresses[i]<100){       //100이 넘어갈때까지 작업진도에 작업속도를 더해준다. 
            progresses[i] += speeds[i];
            day++;              // 작업속도를 더해줄때마다 작업일수++
        }
        array.push(day);
    }
    let answer=[];      // 한번 배포할때 몇 개의 기능이 배포되는 지 확인하는 배열
    let p1=1;           // 투포인트 방법
    let p2=0;
    while(p1<array.length){     //p1이 배열길이보다 작을때까지만 실행
        if(array[p1]<=array[p2]){       // p1번째 요소와 p2번째 요소를 비교하여 p1이 작거나 같으면 p1은 증가 
            p1++;
        }else{              // 반대로 작으면 p1과 p2의 차이만큼 빼주고 상태를 같게 만듬
            answer.push(p1-p2);
            p2=p1;
        }
    }
    answer.push(p1-p2);
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.18ms, 33.4MB)
// 테스트 4 〉	통과 (0.16ms, 33.4MB)
// 테스트 5 〉	통과 (0.17ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.7MB)
// 테스트 7 〉	통과 (0.17ms, 33.4MB)
// 테스트 8 〉	통과 (0.15ms, 33.5MB)
// 테스트 9 〉	통과 (0.16ms, 33.5MB)
// 테스트 10 〉	통과 (0.17ms, 33.7MB)
// 테스트 11 〉	통과 (0.06ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0