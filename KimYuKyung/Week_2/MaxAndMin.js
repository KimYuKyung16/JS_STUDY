function solution(s) {
    let Nlist = s.split(' ').map((x) => Number(x));
    return Math.min(...Nlist) + ' ' + Math.max(...Nlist);
}