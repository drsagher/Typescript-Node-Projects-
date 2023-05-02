let itemList:string[];
// Adding an element in an empty array
itemList.push("mountains");
// adding one more item in the array
itemList.push("rivers");
let itemArre = ["countries", "cities", "languages"];
// Merging arrays using spread operator
itemList = [...itemList, ...itemArre];
console.log(itemList);
// function to add items in a list
const addItems = (arr,itemName:string)=>{
    arr = [...arr,itemName];
    console.log(arr);
}
// Function Call to add items
addItems(itemList,"123");
