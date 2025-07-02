var firstName = "muskan";
//  Length
function getLength(str) {
  console.log("original String:", str);
  console.log("length", str.length);
}

getLength(firstName);

//indexof
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}

findIndexOf("hello world", "world");

//lastIndexof
function lastIndexOf(str, target) {
  console.log("Orginal String:", str);
  console.log("Index", str.lastIndexOf(target));
}

lastIndexOf("hello world world", "world");

//Slice
function getSlice(str, start, end) {
  console.log("original String", str);
  console.log("After Slice", str.slice(start, end));
  console.log("here the string slices from 0 till 5 => 0,1,2,3,4");
}

getSlice("Helloookkkk world ", 0, 5);
// everything starting from 0 till 5 it did not inculde the last index
// 0,1,2,3,4

//subString
function getSubstring(str) {
  console.log("orginal String", str);
  console.log("After substring", str.substr(2, 5));
  console.log("second argument is the total length of the string");
}

getSubstring("harkirat singh");

// Write a function for customslice method of javascript

function customSlice() {}

//replace
function replaceString(str, target, replacement) {
  console.log("original String:", str);
  console.log("After Replace:", str.replace(target, replacement));
}

replaceString("Hello World", "World", "Javascript");

//split
const value = "hi myname is Muskan Batra";
const words = value.split(" ");

console.log(words);
// split lets you split the words in the sentence based upon what you give in the split function

function trimString(str) {
  console.log("Original String:", str);
  console.log("After Trim:", str.trim());
}

trimString("       Muskan Batra        ");

function toUpperCase(str) {
  console.log("Original String:", str);
  console.log("After Uppercase", str.toUpperCase());
}

toUpperCase("Muskan Batra");

function toLowerCase(str) {
  console.log("original String", str);
  console.log("After Lowercase", str.toLowerCase());
}

toLowerCase("Muskan Batra");
