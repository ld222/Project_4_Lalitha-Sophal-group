// Variables
const express = require("express")
const router = express.Router()
const msg = `Welcome to Mr Coffee's website!`
const db = require('../database')

// Routes
// -------Get request router for the home page
router.get("/", (req, res) => {
    db.any('SELECT id from users;')
         .then(users => {            
            res.render('pages/employees',{
                users
            })
    })
    .catch(error => {
        console.log(error)    
    });    
}) 

// all users

router.get('/employees/:id', (req, res) => {
    db.any('SELECT firstname, lastname, email, day, start_at, end_at from schedules inner join schedules on users.id = schedules.id_user where user.id === parseInt(req.params.id);')
         .then(users => {            
            res.render('pages/employees',{
                users
            })
    })
    .catch(error => {
        console.log(error)    
    });    
})

router.get('/createschedule', (req,res) => {
    db.any("select id, day, start_at, end_at from schedules;")
    .then(schedules => {
        res.render('pages/createschedule', {
            schedules
        })
    })
    .catch(error =>{
        console.log(error)
    })
})

// Exports
module.exports = router