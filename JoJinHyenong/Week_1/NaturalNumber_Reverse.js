function solution(n) {
    var n = (n+'').split('');   //입력된 자연수의 각 자리를 배열로 나눈다.
    n=n.map(Number);            //문자형으로 되어있던 배열들을 숫자형으로 바꾼다.
    return n.reverse();         //배열을 반대로 뒤집는다.
}