function solution(n) {
    return parseInt(
        (n + "")
            .split("")
            .map((a) => parseInt(a))
            .sort((a, b) => b - a)
            .join("")
    );
}
