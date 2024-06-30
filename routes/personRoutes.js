const express = require('express');
const Person = require('../models/person')
const router = express.Router()


router.get('/', async (req, res, next)=> {
    try{
        const persons = await Person.find({});
        res. status(200).json(persons)
        
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })
  router.post('/', async (req, res, next)=> {
    try{
       
      const person = new Person(req.body)
      await person.save();
      res.status(201).json(person)
  
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })

module.exports = router