const express = require("express")
const router = express.Router()
const msg = `Welcome to Mr Coffee's website!`
// const data = require('./data')
const db = require('../database')


// Routes
// -------Get request router for the home page
router.get("/", (req, res) => {
    
    db.any("select id, firstname, lastname, email, password from users;")
    .then(rows => {
        res.json(rows)
    })
    .catch(error =>{
        console.log(error)
    })
})

// Exports
module.exports = router