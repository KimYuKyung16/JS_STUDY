function solution(A,B){
    var array =[];
    for(let i=0;i<A.length;i++){
        var max = B.reduce(function(a, b) {
        return Math.max(a, b);
        }, -Infinity);
        var min = A.reduce(function(a,b){
            return Math.min(a,b);
        }, Infinity);
        array.push(min*max);
        A.splice(A.indexOf(min),1);
        B.splice(B.indexOf(max),1);
        i--;
    }return array.reduce((a,b)=>a+b)
}

function solution(A,B){
    var array =[];
    for(let i=0;i<A.length;i++){
        array.push(Math.min(...A)*Math.max(...B));
        A.splice(A.indexOf(Math.min(...A)),1);
        B.splice(B.indexOf(Math.max(...B)),1);
        i--;
    }return array.reduce((a,b)=>a+b); 
}