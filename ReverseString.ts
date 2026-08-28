const str = "kirthika";
 
const reversed = str
.split("")
.reduce((acc, char) => char + acc, "");

 
console.log(reversed);