let makeShirt = (sise, text)=>{
    if(sise === "large"){
        console.log(`Shirt Size is ${sise} and Text to Print is "I Love TypeScript"`);
    }
    else if(sise === "medium"){
        console.log(`Shirt Size is ${sise} and Text to Print is "I Love TypeScript"`);
    }
    else{
        console.log(`Shirt Size is ${sise} and Text to Print is ${text}`);
    }
}

makeShirt("medium","I Love kids");