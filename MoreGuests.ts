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
// console.log(guestList);
guestList.forEach((elm, index)=>{
    console.log("Greeting! "+ elm +inviMsg);
});