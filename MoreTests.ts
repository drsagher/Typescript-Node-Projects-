// Tests for equality and inequality with strings
let uid = "Admin";
let password = "@admin";

if(uid === "Admin" && password === "@admin"){
    console.log("User Found. Access Granted!");
}else if(!(uid === "Admin" && password === "@admin")) {
    console.log("User not found. Access Denied.!");
}else{
    console.log("Invalid credentials");
}

// Tests using the lower case function
let fullName = "ABUBAKAR SIDDIQUE";
if(fullName.toLowerCase() === "abubakar siddique"){
    console.log("Lowercase Test is cleared.");
}else{
    console.log("Lowercase test failed.")
}

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x=1;
let y=2;
let z=3;
if(x == y){
    console.log(`${x} and ${y} are same numbers.`);
} else if(y<x){
    console.log(`${x} is a greater number than ${x}.`);
}
else if(z > y && z > x){
    console.log(`${z} is a greater number than ${x} and ${y}.`);
}else{
    console.log("Invalid Input!");
}

if( x <= y){
    console.log(`${x} is less than or equal to ${y}.`);
}else if(z >= y || y >= x){
    console.log(`Either ${z} is a greater number than ${y} or ${x} is a greater number than ${x}.`);
}else{
    console.log("Greater Than and Less Than Equality Test failed.");
}
// Tests using "and" and "or" operators
let is_transgender = false;
let gender1 = "Male";
let gender2 = "Female";
if(gender1 === "Male" && gender2 === "Female"){
    is_transgender = true;
}else if (gender1 === "Male" || gender2 ==="Female"){
    is_transgender = false;
}
if (is_transgender){
    console.log("You are Transgender.");
}
// Test whether an item is in a array
const locations = ["The Azores, Portugal", "Mount Kilimanjaro, Tanzania","Lingualizing Scenic Area, China","Maraschino Bamboo Grove, Japan","Na Pal Coast, Hawaii"];
let word2find = "China2q";
if(locations.lastIndexOf(word2find)){
    console.log(`The word is found in the array`);
}else if(locations.lastIndexOf(word2find) == -1){
    console.log("Word is not in the array");
}else{
    console.log("Invalid Operation");
}
