import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

import connectDB from './core/connect.js'
import authRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddle.js'

dotenv.config()
const app = express()
app.use(express.json())
connectDB()

app.get('/', (req, res) => {
  res.send('API is runing...')
})
app.use('/api/auth', authRoutes)

// не найден путь
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server run in ${process.env.NODE_ENV}  on PORT ${PORT}...`.yellow.bold
  )
)
