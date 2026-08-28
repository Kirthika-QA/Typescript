export{}
let num=[10,30,80,10,40,80];
let duplicate:number[]=[];
for(let arr of num){
    if(num.indexOf(arr)!==num.lastIndexOf(arr) && !duplicate.includes(arr)){
        duplicate.push(arr);
    }
}
console.log("Duplicate numbers:", duplicate);

//method 2

let num1:number[]=num.filter((value,index)=>num.indexOf(value)!==index)
console.log("Duplicate numbers using filter method:",num1);