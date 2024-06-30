const express = require('express');
const Booking = require('../models/booking');
const router = express.Router()


router.get('/', async (req, res, next)=> {
    try{
        const bookings = await Booking.find(req.params, 'selectedSeats');
        res. status(200).json(bookings)
        
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })


  router.get('/:bookingId', async (req, res, next)=> {
    try{
      const booking = await Booking.findById(req.params.showId).populate('screen');
      res.status(200).json(booking)
      
        
    }
    catch(err) {
      res. status(500).send('err occured') 
  
    }
  })
  router.post('/', async (req, res, next)=> {
    try{
       
      const booking = new Booking(req.body)
      await booking.save();
      res.status(201).json(booking)
  
    }
    catch(err) {
      res. status(500).send('err occured')
  
    }
  })
  router.delete('/:bookingId',async (req, res, next)=>{
    try{
     await Booking.findByIdAndDelete(req.params.showId)
     res.status(204).send("deleted")
    }
    catch(err){
      res.status(404).send('Booking of requested Id not found!')

    }

  })

module.exports = router