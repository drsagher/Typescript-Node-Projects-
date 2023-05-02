// Test no1 : Conditional Statement Showing True
let num= 100;
if(num%2==0){
    console.log(`If remainder of num/2 is zero then ${num} is an even number. therefore, num%2==0 will return True`);
}
else{
    console.log("The condition num%2==0 will return false");
}
// Test no2 : Conditional Statement Showing True
let id = "admin";
let password = "123";
if(id==="admin"&&password==="123"){
    console.log("Access Granted");
}
// Test no3 : Conditional Statement Showing True
let marks=50;
if(marks < 60){
    console.log("You failed. try again");
}
// Test no4 : Conditional Statement Showing True
let salary= 100000;
let bonus;
if(salary<=100000){
    bonus = (salary*10)/100;
}
console.log(`Your Salary is ${salary} and bonus is ${bonus}`);
// Test no5 : Conditional Statement Showing True
let ITProficiency = true;
if(ITProficiency){
    console.log("You have qualified for Web3 course")
}
// Cases for False Conditional Statements
// Test no6: Conditional Statement Showing False
let x =100;
let y= 50;
if(y>=x){
    console.log(`${y} is a smaller number than ${x}`);
}
// Test no7: Conditional Statement Showing False
let isMale = false;
if(isMale){
    console.log("You are not Male.")
}
// Test no8: Conditional Statement Showing False
let word = "HELLO";
if(word === "hello"){
    console.log(`${word} are small letters`);
}else {
    console.log(`${word} are capital letters`)
}
// Test no9: Conditional Statement Showing False
let n1 =10;
let n2 = 10;
if(n1 != n2){
    console.log(`Both ${n1} and ${n2} are different numbers.`)
}else{
    console.log(`Both ${n1} and ${n2} are same number.`)
}
// Test no10: Conditional Statement Showing False
let a =10;
let b=5;
let c= 3;
if(a<b || b <c ){
    console.log("The condition returns false.");
}else{
    console.log("The condition returns true");
}