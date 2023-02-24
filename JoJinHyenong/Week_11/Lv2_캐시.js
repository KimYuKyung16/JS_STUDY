// function solution(cacheSize, cities) {
//     let array=[];
//     let count=0;
//     console.log(array.indexOf(cities.shift()));
//     const len = cities.length;
//     for(let i=0;i<len;i++){
//         if(array.indexOf(cities.shift())>=0){          // 정답 배열안에 있으면 
//            if(array.indexOf(cities.shift())>cacheSize-1){     // 캐시크기보다 크면
//             array.push(cities.shift());
//             count+=5;
//             }else{                                      // 캐시크기보다 작으면
//             array.splice(array.indexOf(cities.shift()),1);
//             array.push(cities.shift());
//             count+=1;
//             }
//         }else{
//             if(array.length>cacheSize){
//                 array.shift();
//                 array.push(cities.shift());
//                 count+=5; 
//             }else{
//                array.push(cities.shift());
//                 count+=5; 
//             }
//         }
//         console.log(array)
//     }
        
//     return count;
    
// }
function solution(cacheSize, cities) {
    const city = cities.map(a => a.toLowerCase()); 
    // 배열 내 요소 소문자로
    
    let array = [];
    let time = 0;
    
    for(let i = 0; i < city.length; i++){
        if(!array.includes(city[i])){ // 큐에 도시가 존재하지 않으면
            time+=5;
            array.push(city[i]);
            if(array.length > cacheSize){ // 캐시사이즈를 넘으면 앞 요소 삭제
                array.shift();
            }
        }
        else{ // 도시가 큐에 있으면
            time++;
            let idx = array.indexOf(city[i]); 
            array.splice(idx, 1);
            array.push(city[i]); // 인덱스 찾아서 제거 후 맨 뒤에 삽입
        }
    }
    return time;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.6MB)
// 테스트 2 〉	통과 (0.11ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.10ms, 33.6MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.11ms, 33.6MB)
// 테스트 7 〉	통과 (0.16ms, 33.5MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.07ms, 33.6MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
// 테스트 11 〉	통과 (46.26ms, 45MB)
// 테스트 12 〉	통과 (0.17ms, 33.5MB)
// 테스트 13 〉	통과 (0.31ms, 33.6MB)
// 테스트 14 〉	통과 (0.35ms, 33.5MB)
// 테스트 15 〉	통과 (0.39ms, 33.6MB)
// 테스트 16 〉	통과 (0.42ms, 33.7MB)
// 테스트 17 〉	통과 (0.74ms, 33.7MB)
// 테스트 18 〉	통과 (0.39ms, 33.6MB)
// 테스트 19 〉	통과 (0.73ms, 33.7MB)
// 테스트 20 〉	통과 (0.84ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0