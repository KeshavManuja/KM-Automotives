const express = require("express")
const User = require("../Model/UserSchema")

const router = express.Router()

router.post("/login", async(req,res)=> {
   
    const { name,password} = req.body
    try{
        const user = await User.findOne({name,password})
        if(user) {
            return res.status(201).send(user)
        }
        else{
            return res.status(400).send("Something went wrong")
        }
    }
    catch(err){
        return res.status(400).send(err)
    }
})

router.post("/register", async(req,res)=> {

    
    try{ 
        const newuser = await User.create(req.body)
        if(!newuser) return res.status(400).send('Something error')
        
        return res.status(201).send("user_register_successfully")
    
    }
    catch(err){
        return res.status(400).send(err)
    }
})

module.exports = router