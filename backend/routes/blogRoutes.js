const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const jwt=require('jsonwebtoken')
function verifytoken(req,res,next){
    let token=req.headers.token;
    try{
    if(!token) throw 'Unauthorized access';
    else{
        let payload=jwt.verify(token,'blogApp');
        if(!payload) throw 'Unauthorized access';
        next()
    }
}  catch(error) {
    console.log(error);

}
}

const blogModel = require('../model/blogData');


    
    router.get('/blogs',verifytoken, async (req, res) => {
        try {
            const data = await blogModel.find();
            res.status(200).send(data);
        } catch (error) {
            res.status(404).send('Data not found');
        }
    });
    
    router.post('/add',verifytoken, async (req, res) => {
        try {
            const item = req.body;
            const data = new blogModel(item);
            await data.save();
            res.status(201).json({ message: 'Blog post added successfully!', blog: data });
        } catch (error) {
            console.error('Error adding blog:', error);
            res.status(500).json({ message: 'Post Unsuccessful. Please try again later.' });
        }
    });


     router.put('/update/:id',verifytoken, async (req, res) => {
        try {
            await blogModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send({message:'updated successfully'})
        } catch (error) {
             console.error(error);
            res.status(400).send({message:'Error updating blog'});
         }
     });


     router.delete('/delete/:id',verifytoken, async (req, res) => {
        try {
          const blog = await blogModel.findByIdAndDelete(req.params.id);
          if (blog) {
            res.status(200).json({ message: 'Blog deleted successfully' });
          } else {
            res.status(404).json({ message: 'Blog not found' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error deleting blog' });
        }
      });
      

  
























module.exports = router;

