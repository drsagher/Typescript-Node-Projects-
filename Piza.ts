let pizaList = ["Cheese", "Veggie", "Pepperoni", "Meat", "Margherita"];
for(let i =0; i< pizaList.length;i++){
    console.log(pizaList[i]);
}

for(let piz of pizaList){
    console.log(`I like ${piz} pizza.`)
}

for(let piz of pizaList){
    console.log(`One of the reasons why ${piz} is so popular is its versatility - it can be enjoyed as a quick snack, a casual meal, or a gourmet feast. It's also an excellent option for vegetarians and meat-lovers alike, as there are endless topping combinations to suit different tastes and dietary requirements. I really love ${piz} pizza.\n`);
}

