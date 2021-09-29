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
// Truncate a String

function truncateString(str, num) {
  if(str.length>num){
   return str.slice(0,num) + "..."
  } else {
    return str
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Finders Keepers

function findElement(arr, func) {
  return arr.find(func)
}

// Boo Who

function booWho (bool){
  return typeof bool === 'boolean'
}

booWho(null) // false

// Title Case a Sentence

function titleCase(str) {
  let arr = str.toLowerCase().split(' ')
  let result = arr.map(x=>{return x.replace(x.charAt(0),x.charAt(0).toUpperCase())})
  return result.join(' ')
}

titleCase("I'm a little tea pot");

// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice()
  for (let i = 0; i < arr1.length; i++) {
    arr.splice(n, 0, arr1[i]);
    n++;
  }
  return arr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer

function bouncer(arr) {
  let newArr = []
  for(let i = 0; i<arr.length;i++){
    arr[i]? newArr.push(arr[i]): null
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);

//Where do I Belong

function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}

getIndexToIns([40, 60], 50);

// Mutations

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);

//

function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) temp.push(arr[i]);
    else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);