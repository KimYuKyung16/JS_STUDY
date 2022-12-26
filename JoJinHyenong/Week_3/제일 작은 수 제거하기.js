function solution(arr) {
    var array =[];
    if(arr.length===1){
        array.push(-1);
        return array;
    }else{
        arr.splice(arr.indexOf(Math.min(...arr)),1)
        return arr;
    }
}