const mongoose = require('mongoose')
const LINK = process.env.MONGOLINK
const connetDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://creditzzz2024:<db_password>@portfolio.xmm7vob.mongodb.net/");
        console.log("successfully connected")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connetDB