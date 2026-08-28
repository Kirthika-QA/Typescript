export{}

let word="kirthikaa";
let name=new Map<string,number>();
let res=new Set<string>();
for( let char of word)
    {
name.set(char,(name.get(char)||0)+1)
}
for(let [key,values] of name){
if(values===1){
res.add(key);
}
}
let result=[...res];
console.log(result.pop());

