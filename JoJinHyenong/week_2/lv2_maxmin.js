function solution(s) {
    a = s.split(' ');   // 각 숫자를 하나의 배열요소로 만듬
    b = Math.min(...a); // 최대값 구하기
    c = Math.max(...a); // 최솟값 구하기
    d = [b,c];          // 각각을 배열에 넣고
    return  d.join(' ');        
}