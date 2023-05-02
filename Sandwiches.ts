let items = ["Rich", "creamy", "cheesy", "tangy"];
let choice  = 2;

function order(choice, items){
    let summary=[choice];
    for(let i=0;i<=choice;i++){
        summary[i]= items[i];
    }
    return summary;
}

let choices = order(2,items);

function showSummary(choices){
    console.log(`Your order: \n Pizza - 1-Large\n ${choices}`)
}

showSummary(choices);