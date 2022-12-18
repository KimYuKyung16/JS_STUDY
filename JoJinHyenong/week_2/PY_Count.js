function solution(s){
    var a = s.toUpperCase();        // 모두 대문자로 바꿈
    var b = a.split('');            // 배열로 변경
    var count_x =0;
    var count_y =0;
    for(let i=0;i<b.length;i++){
        if(b[i]=='P'){              // 각각의 문자가 있으면 카운팅
            count_x++;
        }else if(b[i]=='Y'){
            count_y++;
        }
    }
    if(count_x==count_y){
        return true;
    }else{
        return false;
    }
}