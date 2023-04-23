function solution(bridge_length, weight, truck_weights) {
    let answer = 1; // 최종 시간
    let arrive = 0; // 도착한 트럭 수
    let going = []; // 가고있는 트럭 수
    let time = []; // 트럭 별 경과 시간
    let len = truck_weights.length; // 트럭 개수
    
    while(arrive !== len) {
        if (going.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight) {
            going.push(truck_weights.shift());
            time.push(0);
        } 
        
        time = time.map((x) => x+1);
        answer++;
        
        if (time[0] === bridge_length) {
            time.shift();
            going.shift();
            arrive++;
        }
    }
    
    return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.91ms, 33.9MB)
테스트 2 〉	통과 (19.07ms, 38.2MB)
테스트 3 〉	통과 (0.21ms, 33.4MB)
테스트 4 〉	통과 (39.92ms, 37.2MB)
테스트 5 〉	통과 (56.08ms, 37.2MB)
테스트 6 〉	통과 (35.03ms, 37.2MB)
테스트 7 〉	통과 (0.69ms, 33.8MB)
테스트 8 〉	통과 (0.28ms, 33.5MB)
테스트 9 〉	통과 (6.65ms, 37.9MB)
테스트 10 〉	통과 (0.30ms, 33.5MB)
테스트 11 〉	통과 (0.16ms, 33.6MB)
테스트 12 〉	통과 (0.38ms, 33.6MB)
테스트 13 〉	통과 (0.91ms, 34MB)
테스트 14 〉	통과 (0.21ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/