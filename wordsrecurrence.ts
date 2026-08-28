export{}
let word="kirthika";
let map=new Map<string,number>();
for(let char of word){
    map.set(char,(map.get(char)||0)+1);
}
for(let [key,value] of map){
    console.log(key,value);
}