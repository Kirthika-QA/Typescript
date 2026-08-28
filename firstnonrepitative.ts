export{}
let s="kirthika";
let map=new Map<string,number>();
for(let char of s){
    map.set(char,(map.get(char)||0)+1);
}
for(let [key,value] of map){
    if(value===1){
        console.log("First non-repeating character:", key);
        break;
    }
}