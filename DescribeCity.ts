function describe_city(city, country) {
    if(city === "" && country === ""){
        console.log("Karachi is in Pakistan")
    }else{
        console.log(`${city} is in ${country}.`);
    }
}

describe_city("", "");
describe_city("London", "England");
describe_city("Paris", "France");
describe_city("New York City", "United States");

