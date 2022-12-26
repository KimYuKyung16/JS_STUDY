function solution(arr, divisor) {
    var array=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%divisor===0){
            array.push(arr[i]);
        }
    }
    if(array.length===0){
        array.push(-1);
        return array;
    }else{
        return array.sort((a,b)=>a-b);
    }
}