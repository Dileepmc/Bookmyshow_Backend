const express = require('express');
const Screen = require('../models/screen')
const router = express.Router()


router.get('/', async (req, res, next)=> {
    try{
        const screens = await Screen.find({});
        res. status(200).json(screens)
        
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })
  router.post('/', async (req, res, next)=> {
    try{
       
      const screen = new Screen(req.body)
      await screen.save();
      res.status(201).json(screen)
  
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })

module.exports = router