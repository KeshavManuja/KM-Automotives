const express = require("express")

const app = express()
const port = process.env.PORT || 5000
const CarRouter = require("./Controller/CarController")
const connect = require("./db")
const UserRouter = require("./Controller/UserController")

app.use(express.json())



app.use("/api/cars",CarRouter)
app.use("/api/users",UserRouter)



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