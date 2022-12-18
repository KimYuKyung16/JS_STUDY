function solution(s) {
    let answer = "";
    const a = s.split(" ");
    const b = Math.max(...a);
    const c = Math.min(...a);
    answer = c + " " + b;
    return answer;
}
