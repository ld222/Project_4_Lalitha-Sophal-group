// Variables
const express = require("express")
const router = express.Router()
const msg = `Welcome to Mr Coffee's website!`
const db = require('../database')

// Routes
// -------Get request router for the home page
router.get("/", (req, res) => {
    res.render('pages/index')
}) 

// Exports
module.exports = router