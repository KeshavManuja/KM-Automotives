const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect("mongodb+srv://Keshav:Workhard123456@cluster0.v13ux.mongodb.net/KM-Automotives?retryWrites=true&w=majority")
}

