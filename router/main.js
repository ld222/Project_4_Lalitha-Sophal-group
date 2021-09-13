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
             console.log(users)         
            res.render('pages/index', {
                users
            })
    })
    .catch(error => {
        console.log(error)    
    });    
}) 

// all users
router.get('/:id', (req, res) => {
    db.any('SELECT firstname, lastname, email, day, start_at, end_at from users inner join schedules on users.id = schedules.id_user where users.id = $1', [parseInt(req.params.id)])
        .then(users => {      
            console.log(users)      
        res.render('pages/employees', {
            users
        })
    })
    .catch(error => {
        console.log(error)    
})  
})

router.get("/:id/schedules", (req, res) => {
    // db.any('SELECT id, day, start_at, end_at from schedules where id_user = $1', [parseInt(req.params.id)])
    db.any("SELECT day, to_char(start_at, 'HH:MI AM') AS start_at, to_char(end_at, 'HH:MI AM') AS end_at FROM schedules where id_user = $1", [parseInt(req.params.id)])
    // db.any('SELECT day, start_at, end_at from schedules;')
         .then(schedules => {   
             console.log(schedules)         
            res.render('pages/schedules', {
                schedules
            })
    })
    .catch(error => {
        console.log(error)    
    });    
}) 

router.post('/:id/schedules', (req, res) => {
    console.log(req.body)
    db.none('INSERT INTO schedules(id_user, day, start_at, end_at) VALUES($1, $2, $3, $4);', [req.params.id, req.body.day, req.body.start_at, req.body.end_at])
    .then(() => {
      res.redirect('pages/schedules')
    })
    .catch(error => {
      console.log(error)
    })
  })

// Exports
module.exports = router