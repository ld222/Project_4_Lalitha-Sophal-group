const express = require('express')
const router = express.Router()



router.get('/', (req,res) => {
    db.any("select id, id_user, day, start_at, end_at from schedules;")
    .then(rows => {
        res.json(rows)
    })
    .catch(error =>{
        console.log(error)
    })
})

// Export
module.exports = router