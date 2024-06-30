const mongoose = require('mongoose');

   const personSchema = new mongoose.Schema({
      image: String,
      name: String,
      occupation: String,
      Birthplace: String,
      About: String
  });


  const person = mongoose.model('person', personSchema);
   
  module.exports = person
