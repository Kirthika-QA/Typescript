export{}
let a=[10,20,60,40,30];
let b=[30,40,50];
let res=a.filter(num=>b.includes(num));
console.log("Common elements in both arrays:", res.sort((a,b)=>a-b));