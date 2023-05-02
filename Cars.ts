function storeInformation(manufacturer, model, color, features){
    let car ={
        "Manufacturer":manufacturer,
        "Model":model,
        "Colors":color,
        "Features":features,
    }
    return car;
}

let car = storeInformation("Honda","2023","Blue","AC, Auto-Drive, Solar");
console.log(car);

console.log(car.Manufacturer);
console.log(car.Model);
console.log(car.Colors);
console.log(car.Features);
