//object literal notation
let petSalon = {
    //properties 
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"262",
        zip:"22408"
    },
    pets:[
        {
            name:"Zeus",
            age:1,
            gender:"Male",
            breed:"English Bulldog",
            service:"grooming ultra",
            owner:"Saydee G.",
            contactPhone:"555-555-5555"
        },
        {
            name:"Bentley",
            age:9,
            gender:"Male",
            breed:"Bichon Frise",
            service:"shampoo and haircut",
            owner:"Michele B.",
            contactPhone:"555-444-5555"
        },
        {
            name:"Kona",
            age:2,
            gender:"Male",
            breed:"French Bulldog",
            service:"pedicure",
            owner:"Emil N.",
            contactPhone:"555-333-5555"
        }
    ]
    
}

//console.log(petSalon.address.street);
//console.log(petSalon.pets)

function displayNames(petSalon){
    alert(petSalon.pets.length);
}
for(let i=0;i<petSalon.pets.length;i++){
        console.log(petSalon.pets[i].name);
}

displayNames(petSalon)
