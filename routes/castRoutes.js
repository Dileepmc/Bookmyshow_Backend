const express = require('express');
const Cast = require('../models/cast')
const router = express.Router()


router.get('/', async (req, res, next)=> {
    try{
        const casts = await Cast.find({});
        res. status(200).json(casts)
        
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })
  router.post('/', async (req, res, next)=> { 
    try{
       
      const cast = new Cast(req.body)
      await cast.save();
      res.status(201).json(cast)
  
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })

module.exports = router