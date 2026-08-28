let vowels="kirthika";
let count=0;
for(let char of vowels){
    if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
        count++;
    }
}
console.log("Number of vowels:", count);

//method 2
let vowelCount = vowels.match(/[aeiou]/gi)?.length || 0;
console.log("Number of vowels (method 2):", vowelCount);

//method 3

let word1 = "kirthika";
let count1 = [...word1]
.filter(ch => ch.includes("aeiou"))
.length;
console.log("Number of vowels (method 3):", count1);

//method 4
let word = "kirthika";
let vowels2 = new Set(['a', 'e', 'i', 'o', 'u']);

let count2 = 0;

for (let ch of word) {
    if (vowels2.has(ch)) {
        count2++;
    }
}

console.log("Number of vowels (method 4):", count2);    