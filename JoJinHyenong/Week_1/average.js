function solution(arr) {
    // answer=[];
    // for(i=0;i<arr;i++){
    //     answer.push();
    // }
    var hap = arr.reduce((a,b)=>a+b,0);     //배열의 합을 구한다.
    
    return hap/arr.length;      //배열의 합과 그 배열의 길이를 나눠서 평균을 구한다.
}