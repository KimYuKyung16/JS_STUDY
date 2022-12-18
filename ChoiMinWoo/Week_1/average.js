function solution(arr) {
    return arr.reduce((a, b, i, { length }) =>
        i === length - 1 ? (a + b) / length : a + b
    );
}
