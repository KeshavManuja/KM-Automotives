const express = require("express")

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
const connect = require("./db")

app.get("/",async(req,res)=>{
    res.send("Success_make_get")
})

app.listen(port,async()=>{
    try{
        await connect()
        console.log("MongoDB connection done")
        console.log(`Nodejs Listening to port ${port}`)
    }
    catch(err){
        console.log(err.message)
    }
})