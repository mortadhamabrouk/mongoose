const Person = require ('../models/userSchema')
const router = require('./userroute')




// Save the new person to the database****

router.post("/post",async(req,res)=>{
    
    try {
        const user= await Person.create(req.body)
        res.status(201).json({msg:"User created",user})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong ",err:error})
    }
    
    })
    

// find all users****

    router.get("/Getpersons",async(req,res)=>{
    
        try {
            const users= await Person.find()
            res.status(201).json({msg:"Find Person",users})
        } catch (error) {
            res.status(500).json({msg:"Something went wrong ",err:error})
        }
        
        })

// Use model.findOne() to Return a Single Matching Document from Your Database***

router.get("/getfoods/:food",async(req,res)=>{
    
            try {
                const users= await Person.find({ favoriteFoods:req.params.food }).sort({ field: 'asc' }).limit(1).select("name favoriteFoods")
        
                res.status(200).json({msg:"Get Users",users})
            } catch (error) {
                res.status(500).json({mdg:"Something went wrong ",err:error})
            }
            
            })

        
// Delete One Document Using model.findByIdAndRemove
        

router.delete("/delete/:id",async(req,res)=>{
    
    try {
        console.log(req.params.id)
        const PersonDeleted= await Person.findByIdAndDelete(req.params.id)

        res.status(200).json({msg:"UserDeleted"})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong ",err:error})
    }
    
    })


// Find a person by Name and set the person's age to 20,Add "hamburger" to the list of the person's favoriteFoods

router.put("/Updateperson",async(req,res)=>{
    
    try {
        const users= await Person.findOneAndUpdate({ name: 'John wick' },req.body,{new:true})


        res.status(200).json({msg:"Find Person and Udapte",users})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong ",err:error})
    }
    
    })

// Use model.findById() to Search Your Database By _id***

router.get("/getbyid/:id",async(req,res)=>{
    
    try {
        
        const users= await Person.findById(req.params.id)

        res.status(200).json({msg:"Find By Id",users})
    } catch (error) {
        res.status(500).json({msg:"Something went wrong ",err:error})
    }
    
    })




module.exports=router