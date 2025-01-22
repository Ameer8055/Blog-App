const mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
    Title: String,
    Description: String,
    ImageURL: String
})

const blogData=mongoose.model('blog',blogSchema);



module.exports=blogData;