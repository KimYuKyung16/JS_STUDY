function solution(a, b) {
    var count =0;
    if(a<b){
        for(let i=a;i<=b;i++){
            count +=i;
        }return count;
    }else if(a>b){
        for(let i=b;i<=a;i++){
            count +=i;
        }return count;
    }else return a;
}