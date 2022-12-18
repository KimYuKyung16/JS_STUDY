function solution(s) {
    let answer = s
        .toLowerCase()
        .split(" ")
        .map((data) => data.charAt(0).toUpperCase() + data.substring(1))
        .join(" ");
    return answer;
}
