export{};

let s = "ki&rth+ika";

let chars = s.match(/[a-z]/gi)?.reverse() || [];
console.log(chars);
let result = s.replace(/[a-z]/g,()=> chars.shift()!);

console.log(result);