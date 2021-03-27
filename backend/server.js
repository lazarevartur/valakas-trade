import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
// import connectDB from "./config/db.js";
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server run in ${process.env.NODE_ENV} on PORT ${PORT}...`.yellow.bold
  )
)
