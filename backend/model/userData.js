const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    email:String,
    password:String,
    phone:String,
    address:String
})

const userData=mongoose.model('user',userSchema);


module.exports=userData;