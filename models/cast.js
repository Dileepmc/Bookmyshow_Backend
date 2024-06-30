
const mongoose = require('mongoose');

   const castSchema = new mongoose.Schema({
      person:{
        type: mongoose.ObjectId,
        ref: 'person'
      },
      movie:{
        type:mongoose.ObjectId,
        ref: "movie"
      },
      role: String

      
  });


  const Cast = mongoose.model('Cast', castSchema);
   
  module.exports = Cast