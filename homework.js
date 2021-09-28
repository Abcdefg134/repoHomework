// Convert Celsius to FahrenheitPassed

function convertToF(celsius) {
    let fahrenheit = celsius* 9/5 + 32
    return fahrenheit;
  }
  
  convertToF(30);

//Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  reverseString("hello");

//Factorialize a Number

function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    console.log(num * factorialize(num - 1));
    return num * factorialize(num - 1);
  }
  
factorialize(5);

//Find the Longest Word in a String
function findLongestWordLength(str) {
    let a = str.split(' ').map(x=>x.length)
    return Math.max(...a);
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
    return arr.map((subArray)=> {
      return subArray.reduce((prev, current)=> {
        return current > prev ? current : prev;
      });
    });
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  if(num<1){
    return ''
  }
  for(var a = '',i=num; i>0;i--){
    a += str
  }
  return a;
}

repeatStringNumTimes("abc", 0); //''
repeatStringNumTimes('abc',3);// abcabcabc
