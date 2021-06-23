import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
// External import
import posts from './routes/posts.js'

dotenv.config()


const app = express();
const PORT = process.env.PORT || 30001
const CONNECTION_URL = process.env.CONNECTION_URL

// Middle wares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ! Connect To mongodb
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    //  posts routes
    app.use('/posts', posts)

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
})
.catch((error) => {
    console.log('Could not connect to database', error)
})

mongoose.set('useFindAndModify', false) 
