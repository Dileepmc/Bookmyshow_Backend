const express = require('express');
const Theatre = require('../models/theatre')
const router = express.Router()


router.get('/', async (req, res, next)=> {
    try{
        const theatres = await Theatre.find({});
        res. status(200).json(theatres)
        
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })
  router.post('/', async (req, res, next)=> {
    try{
       
      const theatre = new Theatre(req.body)
      await theatre.save();
      res.status(201).json(theatre)
  
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })

module.exports = router