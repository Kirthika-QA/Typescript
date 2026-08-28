export{}
let word= "kirthika";
let result=word.split("").reduce((acc,element)=>element+acc,"");
if(word==result){
    console.log("The given word is palindrome");
}   
else{
    console.log("The given word is not palindrome");
}