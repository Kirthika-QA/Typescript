export{}
let num=[14,6,17,3,7,8];
let largest=num[0];
for(let i=1;i<num.length;i++){
    if(num[i]>largest){
        largest=num[i];
    }
}
console.log("Largest number:", largest);
