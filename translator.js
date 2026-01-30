const word = prompt("Enter the word you would like to translate").toLowerCase();

let myMap= new Map();
myMap.set("door","باب"); 
myMap.set("chair","كرسي");
myMap.set("eggs","بيض");
myMap.set("radio","راديو");
myMap.set("carpet","سجاد");
myMap.set("shoes","حذاء");
myMap.set("cup","كوب");
myMap.set("mobile","جوال");
myMap.set("billow","مخده");
myMap.set("medicine","دواء");

if(myMap.has(word))

{
    console.log(`The translation of ${word} is ${myMap.get(word)}`);
}else{
    console.log();}

