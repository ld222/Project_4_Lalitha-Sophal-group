// Variables Declaration
const express = require("express")
const PORT = process.env.PORT || 3000 // Port
const app = express() // initialise the app
const router = express.Router() // router for different requests
const path = require('path') // for static files in public
const db = require('./database') // database variable

const mainRouter = require('./routes/main')
const employeesRouter = require('./routes/users')

// -------Set static folder
app.use(express.static('public'))


// Routes middleware
// -----For the home page
app.use('/', mainRouter) 
app.use('/employees', employeesRouter) 

// Port
app.listen(PORT, () => console.log('listening on port ${PORT}'))