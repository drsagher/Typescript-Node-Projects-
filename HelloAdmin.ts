const users = ["Admin", "Ali", "Hamza", "Eric", "William", "Mike"];

users.forEach((key, index)=>{
    if(key==="Admin"){
        console.log("Hello admin, would you like to see a status report?");
    }else {
        console.log(`Hello ${key}, thank you for logging in again`);
    }
});