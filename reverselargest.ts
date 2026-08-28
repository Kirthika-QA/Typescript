export{};
let name= "All glitters is not gold";
let words= name.split(" ");
let longestWord= words.reduce((a,b)=> a.length > b.length ? a : b);
console.log(longestWord);
let final=longestWord.split("").reduce((a,b)=> b+a,"");
let result = name.replace(longestWord, final);
console.log(result);
