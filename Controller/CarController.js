const express = require("express")

const router = express.Router()
const Car = require("../Model/CarSchema")


router.get("/getallcars", async(req,res)=> {
    try{
        // console.log("in router")

        const cars = await Car.find({})
        // console.log(cars)
        return res.status(200).send(cars)
    }
    catch(err){
        return res.status(400).send(err.message)
    }
})



module.exports = router