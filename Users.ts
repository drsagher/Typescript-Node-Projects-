let current_users = ["Admin", "Ali", "Mike", "Eric", "William"];
let new_users = ["Admin", "Aneela", "Sagher", "Mike", "Eden"];
let isFound=null;
for(let u of new_users){
    if(current_users.find(e=>e===u)){
        console.log(u+" is already exist, please Enter new user name.");
    }else{
        console.log(u+" username is available");
    }
}