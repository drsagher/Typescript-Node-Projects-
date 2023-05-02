const locations = ["The Azores, Portugal", "Mount Kilimanjaro, Tanzania","Lingualizing Scenic Area, China","Maraschino Bamboo Grove, Japan","Na Pal Coast, Hawaii"];
console.log("Array in its original order");
console.log(locations);
//Using Spread Operator
const copyArr = [...locations];
console.log("Array in Alphabetical order", copyArr.sort());
console.log("array is still in its original order by printing it");
console.log(locations);
// Printing in Reverse Order
console.log("Printing in Reverse Order: ", copyArr.reverse());

console.log("Array in its original order");
console.log(locations);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order of the original Array", locations.reverse());

console.log("The Array is in its original order now: ", locations.reverse());

console.log("Sorted Array, The order is changed. : ", locations.sort());

console.log("Sorting in reverse alphabetical order: ", locations.reverse());