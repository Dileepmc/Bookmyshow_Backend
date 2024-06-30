const express = require('express')
const router = express.Router()
const Language = require('../models/language')

router.get('/', async (req, res, next)=> {
    try{
        const languages = await Language.find({});
        res. status(200).json(languages)
        
    } 
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })

module.exports = router