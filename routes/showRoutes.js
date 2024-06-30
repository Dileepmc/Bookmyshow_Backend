const express = require('express');
const Show = require('../models/show');
const router = express.Router()


router.get('/', async (req, res, next)=> {
    try{
        const shows = await Show.find({});
        res. status(200).json(shows)
        
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })

  router.get('/:showId', async (req, res, next)=> {
    try{
      const show = await Show.findById(req.params.showId).populate('screen');
      res.status(200).json(show)
      
        
    }
    catch(err) {
      res. status(500).send('err occured') 
  
    }
  })
  router.post('/', async (req, res, next)=> {
    try{
       
      const show = new Show(req.body)
      await show.save();
      res.status(201).json(show)
  
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })
  router.delete('/:showId',async (req, res, next)=>{
    try{
     await Show.findByIdAndDelete(req.params.showId)
     res.status(204).send("deleted")
    }
    catch(err){
      res.status(404).send('show of requested Id not found!')

    }

  })

module.exports = router