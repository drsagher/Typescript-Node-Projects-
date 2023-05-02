let magicians = ["Abid", "Abbas","Sohnia"];

let make_great = (magicians)=>{
    let newList=[];
    for(let i=0;i < magicians.length; i++){
        newList[i]= `The Great ${magicians[i]}.`;
    }
    return newList;
}
let newMagicians = make_great(magicians);
function show_magicians(oldList, newList){
    console.log(`Old List: ${oldList}`);
    console.log(`New List: ${newList}`);
}

show_magicians(magicians,newMagicians);
