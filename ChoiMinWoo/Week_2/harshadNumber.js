function solution(x) {
    return x %
        (x + "").split("").reduce((a, b) => parseInt(a) + parseInt(b)) ===
        0
        ? true
        : false;
}
