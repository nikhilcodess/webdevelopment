const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB' ,{useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit."
});

//fruit.save();

const personSchema = new mongoose.Schema ({
    name:String,
    age:Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name:"John",
    age:37
});

// person.save();

// const kiwi = new Fruit({
//     name:"Kiwi",
//     rating:10,
//     review:"The best fruit."
// });

// const orange = new Fruit({
//     name:"Orange",
//     rating:4,
//     review:"Too sour for me."
// });

// const banana = new Fruit({
//     name:"Banana",
//     rating:3,
//     review:"Weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana], function(err)
// {
//     if (err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Successfully saved");
//     }
// })

Fruit.find(function(err, fruits){
    if (err)
    {
        console.log(err);
    }
    else
    {
        mongoose.connection.close();
        // console.log(fruits);

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
    
});