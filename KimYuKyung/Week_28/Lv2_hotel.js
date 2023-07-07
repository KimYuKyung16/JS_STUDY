function solution(book_time) {
  let room = [];
  book_time.sort((a,b) => {
      if (a[1] < b[1]) return -1;
      return 0;
  })
  book_time.sort();
  
  let [h, m] = book_time[0][1].split(':').map(Number);
  room.push(h + parseInt((m+10)/60) + ':' + (m+10)%60);

  for (let i=1; i<book_time.length; i++) {
      let [start, end] = book_time[i];
      let [start_hour, start_min] = start.split(":").map(Number);
      let [end_hour, end_min] = end.split(":").map(Number);
      let flag = 0;
      
      for (let j=0; j<room.length; j++) {
          let [room_h, room_m] = room[j].split(':').map(Number);
          if (start_hour>room_h || (start_hour >=room_h && start_min >= room_m)) {
              room.splice(j,1);
              room.push(end_hour + parseInt((end_min+10)/60) + ':' + (end_min+10)%60);
              flag = 1;
              break;
          }
      }
      
      if (!flag) room.push(end_hour + parseInt((end_min+10)/60) + ':' + (end_min+10)%60);
  }
  
  return room.length;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.41ms, 33.4MB)
테스트 2 〉	통과 (6.13ms, 34.6MB)
테스트 3 〉	통과 (189.21ms, 39.6MB)
테스트 4 〉	통과 (83.92ms, 39.1MB)
테스트 5 〉	통과 (0.13ms, 33.5MB)
테스트 6 〉	통과 (148.30ms, 39.4MB)
테스트 7 〉	통과 (122.06ms, 39.5MB)
테스트 8 〉	통과 (15.24ms, 34.7MB)
테스트 9 〉	통과 (8.03ms, 34.8MB)
테스트 10 〉	통과 (76.78ms, 39.2MB)
테스트 11 〉	통과 (178.94ms, 39.6MB)
테스트 12 〉	통과 (130.58ms, 39.5MB)
테스트 13 〉	통과 (6.51ms, 34.5MB)
테스트 14 〉	통과 (112.93ms, 39.5MB)
테스트 15 〉	통과 (142.76ms, 39.5MB)
테스트 16 〉	통과 (25.56ms, 39MB)
테스트 17 〉	통과 (152.58ms, 39.6MB)
테스트 18 〉	통과 (78.38ms, 39.3MB)
테스트 19 〉	통과 (264.71ms, 39.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/