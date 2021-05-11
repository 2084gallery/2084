import dotenv from 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import transporterVerify from './config/nodemailer.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(bodyParser.json())

let port = process.env.PORT || 4000
let url = process.env.FRONT_URL || `http://localhost:${port}`
app.use(cors({
  origin: url
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/send-email', transporterVerify)
app.listen(port, () => console.log('Server is running...'))
