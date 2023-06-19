

let car1={
    //1. p:v (many)
    brand:"TATA",
    year:2023,
    model:"harrier",
    color:"black",
    type:"SUV",
    engine:"EV/petrol/diesel",
    price:200000,

    //2. functions  (many)
    getFullDetail(){

        // every function return something 
        return this.brand+" "+this.year+" "+ this.model+` `+this.color+' '+this.type+" "+this.engine+` `+this.price ;
    }
}

var car2={
    //1. p:v (many)
    brand:"mahindra",
    year:2022,
    model:"Thar",
    color:"red",
    type:"gypsy",
    engine:"diesel",
    price:1400000

    //2. functions  (many)
}
const car3={
    //1. p:v (many)
    brand:"hyndai",
    year:2023,
    model:"verna",
    color:"black",
    type:"sedan",
    engine:"petrol",
    price:1600000

    //2.method (many)
}

console.log(car1.getFullDetail()); //object.property
console.log(car2["brand"]); //object["property"]
const x="brand"
console.log(car3[x]); //object[expression] x is an expression