
const number = prompt("Enter at least a three-digit number:"); 

if (number.length < 3) {
  alert ("Please enter at least a three-digit number.");
} else {
  let swappedNumber = ""; 

  for (let i = 0; i < number.length; i++) {
    if (i === 1) {
      
      swappedNumber += number[number.length - 1];
    } else if (i === number.length - 1) {
      
      swappedNumber += number[1];
    } else {
      
      swappedNumber += number[i];
    }
  }

  alert ("Number after swapping the second and last digits:" + swappedNumber);
}
