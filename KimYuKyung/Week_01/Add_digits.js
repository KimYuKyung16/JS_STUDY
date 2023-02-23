function solution(n)
{
    n = String(n);
    let sum = 0
    let num_list =  n.split('')
    
    for (num of num_list) {
        sum += Number(num);
    }
    
    return sum;
}