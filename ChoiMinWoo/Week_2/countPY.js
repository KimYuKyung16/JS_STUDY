function solution(s) {
    const a = s.toLowerCase();
    return a.split("").filter((a) => a === "p").length ===
        a.split("").filter((a) => a === "y").length
        ? true
        : false;
}
