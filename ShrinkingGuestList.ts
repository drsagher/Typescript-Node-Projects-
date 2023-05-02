// Guest Lists
let guestList = ['Zia Khan','Mike Litman', 'Dr.Sagher', 'Aneela', 'Abdullah', 'Haseeb'];
let inviMsg = "! I cordially invite you to the dinner and dance to be held at my residence from 7 pm onwards next Sunday. I would eagerly await your presence at the celebration dinner and dance";
guestList.forEach((elm, index)=>{
    console.log("Greeting! "+ elm +inviMsg);
});
// Information about more guest
console.log("We found a bigger dinner table.Therefore, some new guests will join us.");
// Adding a guest in beginning of the guest-list
let newGuest1 = "Ghulam Abbas";
guestList.unshift(newGuest1);
// Adding a guest in the middle of the guest-list: splice method
let newGuest2 = "Abid Hussain";
guestList.splice(3,0,newGuest2);
// Adding a guest in the end of guest-list using append method
let newGuest3 ="Asma";
guestList.push(newGuest3);
console.log(guestList);
console.log("I can invite only two people for dinner:");

// Removing Guest from guest-list USING POP method
while (guestList.length-2){
    console.log(guestList.pop()+", We’re sorry we can’t invite you for dinner");
    // guestList.pop();
}

// Removing Guests from guest-list Using splice method
// guestList.forEach((elm, index)=>{
//     console.log(elm + ", We’re sorry we can’t invite you for dinner");
//     guestList.splice(index);
// });
let newMsg = "You are still invited. Let`s have fun.";
guestList.forEach((elm, index)=>{
    console.log("Greeting! "+ elm + newMsg);
});

// Removing all guest from array: Using splice(o) method
//guestList.splice(0)

// Removing all guest from array: Using POP method
while (guestList.length){
    // console.log(guestList.pop()+", We’re sorry we can’t invite you for dinner");
    guestList.pop();
}
console.log(guestList);
