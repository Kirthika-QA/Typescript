export{}
let num=[1,2,3,4,5,6,7,8,8,9,9];
let largest=[...new Set(num)].sort((a,b)=>b-a);
console.log("Second largest number:", largest[1]);
let s="";
let res=s+("* ");
console.log(res);