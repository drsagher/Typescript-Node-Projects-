let guestList = ['Zia Khan','Mike Litman', 'Dr.Sagher', 'Aneela', 'Abdullah', 'Haseeb'];
let inviMsg = "! I cordially invite you to the dinner and dance to be held at my residence from 7 pm onwards next Sunday. I would eagerly await your presence at the celebration dinner and dance";
guestList.forEach((elm, index)=>{
    console.log("Greeting! "+ elm +inviMsg);
});

//The Person who is not Joining us on Dinner
let whoNotJoining = "Zia Khan";
console.log(`Mr. {whoNotJoining} is not join us on dinner.`);
// New Guest going to be invited
let newGuest = "Sughra";

//Removing from List
guestList.forEach((elm, index)=>{
if(elm === whoNotJoining){
    guestList[index] = newGuest;
}
});

// Re-Printing List
guestList.forEach((elm, index)=>{
    console.log("Greeting! "+ elm +inviMsg);
});
