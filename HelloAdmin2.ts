const user = ["Admin", "Ali", "Hamza", "Eric", "William", "Mike"];
if (user.length <=0){
    console.log("We need to find some users!");
}
else{
    user.forEach((key, index)=>{
        if(key==="Admin"){
            console.log("Hello admin, would you like to see a status report?");
        }else {
            console.log(`Hello ${key}, thank you for logging in again`);
        }
    });
}