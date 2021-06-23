import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
// External import
import home from './routes/homeRoutes.js'

dotenv.config()

const PORT = process.env.PORT || 3001
const app = express();


// Middle wares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//  routes
app.use('/', home)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
