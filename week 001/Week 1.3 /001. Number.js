// The parseInt() function in JavaScript parses a string and returns an integer.
// It takes a string as input, reads characters from left to right, and returns the first valid number it finds.
 // If the string starts with a non-numeric character, it returns NaN. 
// It ignores any characters after the valid number.

function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}


explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");
explainParseInt("manish");


//outout
Original Value: 42
After parseInt: 42


//output
Original Value: 42px
After parseInt: 42

//output
Original Value: 3.14
After parseInt: 3


//output
Original Value: manish
After parseInt: NaN













////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


// The parseFloat() function in JavaScript is used to parse a string and return a floating-point number.
 // it allows parsing decimal numbers (floats), not just integers. 
   // It reads from left to right and stops at the first invalid character.


function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}


explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");



//outout
Original Value: 3.14
After parseFloat: 3.14

//output
Original Value: 42
After parseFloat: 42

//output
Original Value: 42px
After parseFloat: 42









