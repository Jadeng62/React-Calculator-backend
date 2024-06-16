// DEPENDENCIES
const cors = require('cors')
const express = require('express')
const cron = require('node-cron')
const cookieParser = require('cookie-parser')

const authController = require('./controllers/authController')

// CONFIGURATION
const app = express()

// MIDDLEWARE change origin to your frontend netlify address for deployment
app.use(
  cors({
    origin: 'http://localhost:3000',
    // origin: "https://main--jwt-auth-10-3.netlify.app/",
  })
)
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authController)

// ROUTES
app.get('/', (_req, res) => {
  res.send('Welcome to JWT Auth!')
})

// 404 PAGE
app.get('*', (_req, res) => {
  res.status(404).send('Page not found')
})

// EXPORT
module.exports = app
