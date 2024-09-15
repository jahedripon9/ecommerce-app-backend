import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import connectDB from './config/mongodb.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()

// Middlewares 

app.use(express.json())
app.use(cors())

// Api endpoint

app.get('/', (req, res) => {
    res.send("API Working")
})


app.listen(port, () => console.log('Server Started on PORT:' + port))