// * External import
import * as routes from './routes/index.js'

import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const CONNECTION_URL = process.env.CONNECTION_URL

// * Middle wares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
if (process.env.DEV) {
  app.use(morgan('dev'))
}

// * Connect To mongodb
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // * posts routes
    app.use('/posts', routes.posts)
    // app.use('/form', routes.posts)

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log('Could not connect to database', error)
  })

mongoose.set('useFindAndModify', false)
