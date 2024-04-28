const Person = require ('../Models/userSchema ')

// Define an array of objects representing multiple people***

const arrayOfPeople = [
    {
        name: "Michelangelo",
        age: "20",
        favoriteFoods: "Pizza quatre fromages."
    },
    {
        name: "Leonardo",
        age: "21",
        favoriteFoods: "Pasta."
    },
    {
        name: "Raphael",
        age: "22",
        favoriteFoods: "Pizza Sicilienne."
    },
    {
        name: "Donatello",
        age: "20",
        favoriteFoods: "Pizza Regina."
    }
];



Person.create(arrayOfPeople, function(err, people) {
    if (err) {
        console.error("Error creating people:", err);
    } else {
        console.log("People created successfully:", people);
        
    }
});
