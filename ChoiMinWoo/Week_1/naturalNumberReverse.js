function solution(n) {
    return (n + "")
        .split("")
        .map((a) => parseInt(a))
        .reverse();
}
