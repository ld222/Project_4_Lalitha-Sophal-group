// Variables Declaration
const express = require("express")
const PORT = process.env.PORT || 3000 // Port
const app = express() // initialise the app
const router = express.Router() // router for different requests
const path = require('path') // for static files in public
const db = require('./database') // database variable

const mainRouter = require('./routes/main')
const empRouter = require('./routes/employees')
// const schedulesRouter = require('./routes/schedules')

// -------Set static folder
app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

// View engine
app.set('view engine', 'ejs')


// Routes middleware
// -----For the home page
app.use('/', mainRouter) 
app.use('/employees', empRouter) 

// Port
app.listen(PORT, () => console.log(`listening on port at http://localhost:${PORT}`))