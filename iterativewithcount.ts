let s="bbbbaaaaccc";
let arr=s.split("");
let map=new Map<string,number>();
for(let char of arr){
    map.set(char,(map.get(char)||0)+1);
}
console.log(map);

//method 2
let s1="bbbbaaaaccc";
    let count_b=0;
    let count_a=0;
    let count_c=0;
for(let char of s1){
  
    if(char=='b'){
        count_b++;
    }
    else if(char=='a'){
        count_a++;
    }
    else if(char=='c'){
        count_c++;
    }

}
console.log("b:", count_b);
console.log("a:", count_a);
console.log("c:", count_c);
