const mongoose= require('mongoose')

const PersonSchema = mongoose.Schema({
    name:     String,
    age:    Number,
    favoriteFoods:[String] 
})

const Person=mongoose.model("persons",PersonSchema)


module.exports= Person;