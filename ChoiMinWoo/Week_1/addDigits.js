function solution(n) {
    return (n + "")
        .split("")
        .map((a) => parseInt(a))
        .reduce((a, b) => a + b);
}
