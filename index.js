// Variables Declaration
const express = require("express")
const PORT = process.env.PORT || 3000 // Port
const app = express() // initialise the app
// const morgan = require('morgan')
const router = express.Router() // router for different requests
const path = require('path') // for static files in public


const mainRouter = require('./router/main')

// Set static folder
app.use(express.static('public'));

// Middleware
// app.use(morgan('dev'))
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

// View engine
app.set('view engine', 'ejs')

// Routes middleware
app.use(mainRouter) 

// Port
app.listen(PORT, () => console.log(`listening on port at http://localhost:${PORT}`))
