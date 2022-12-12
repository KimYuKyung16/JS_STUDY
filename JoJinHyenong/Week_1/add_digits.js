function solution(n)
{
    var a = String(n);  // n을 문자열로 형변환 시켜준다.
    var answer = 0;
    for(i=0;i<a.length;i++){
        answer += parseInt(a[i]);   // 각 자리수의 숫자들을 더해서 누적시킨다.
    }
    console.log(answer);
    return answer;
}