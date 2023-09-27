
function num(digit){
   console.log("Clicked");
   console.log(digit);
   document.querySelector('.output').value += digit;
}

function allClear(){
   console.log("Clicked");
   document.querySelector('.output').value = '';
}

function equal(){
   let total = document.querySelector('.output').value;
   document.querySelector('.output').value = eval(total);
}

function clearOne(){
   console.log("hello");
   let totalDigits = document.querySelector('.output').value;
   let remainingDigits = totalDigits.slice(0,-1);
   document.querySelector('.output').value = remainingDigits;
}

// function percent(){
//    console.log("percent")
//    let number = document.querySelector('.output').value;
//    let numberLength = number.length;
//    percentNumber = 
// }