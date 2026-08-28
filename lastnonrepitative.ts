let s="kirthika";
let array=new Map<string,number>();
let set=new Set<string>();
for(let char of s){
    array.set(char,(array.get(char)||0)+1);
}
for(let [key,value] of array){
    if(value===1){
      set.add(key);
    }
}
console.log(set);
console.log([...set].pop());