let Magicians = ["Abid", "Abbas","Sohnia"];

let make_great = (magicians)=>{
    for(let i=0;i < magicians.length; i++){
        magicians[i]= `The Great ${magicians[i]}.`;
    }
    return magicians;
}

function show_magicians(magicians){
    for(let m of magicians){
        console.log(m);
    }
}
make_great(Magicians);
show_magicians(Magicians);
