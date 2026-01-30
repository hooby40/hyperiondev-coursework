const word= prompt("Enter a word:");
let left=0;
let right=word.length-1;
let isPalindrome=true;
while (left<right){
    if(word[left]==word[right]){
        isPalindrome=true;
        break;
    }
    left++;

    right--;
}
if(isPalindrome){
    alert("word is a Palindrome");
}else{
    alert("word is not a Palindrome");
}