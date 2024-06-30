const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const  cors = require('cors');
const Person = require('./models/person');
const Language =require('./models/language');

const movieRouts = require('./routes/movieRoutes')
const personRoutes = require('./routes/personRoutes')
const languageRoutes = require('./routes/languageRoutes')
const castRoutes = require('./routes/castRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const screenRoutes = require('./routes/screenRoutes')
const showRoutes = require("./routes/showRoutes")
const bookingRoutes = require('./routes/bookingRoutes')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/movies', movieRouts)
app.use('/persons', personRoutes)
app.use('/languages', languageRoutes)
app.use('/casts', castRoutes)
app.use('/theatres',theatreRoutes)
app.use('/screens',screenRoutes) 
app.use("/shows",showRoutes) 
app.use('/bookings',bookingRoutes)


main() .then(()=>console.log('Database connected')).catch(err => console.log(err));

async function main() {

  const databaseurl = process.env.DATABASE_URL
  const urlwithpassword = databaseurl.replace('<password>', process.env.DB_PASSWORD)


  await mongoose.connect(urlwithpassword);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})