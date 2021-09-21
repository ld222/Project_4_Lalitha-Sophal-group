const db = require('../postgresql');

/* Validation for login form */
const handleErrorSchedules = async (day, starttime, endtime) => {
    let errors = { day: '', starttime: '', endtime: '' };

    if(!(day >= 1 && day <= 7)) { 
        errors.day = 'Invalid day, day should be between 1 and 7 ';
    }

    if(starttime === '') {
        errors.starttime = 'Start time cannot be blank';
    }

    if(endtime === '') {
        errors.endtime = 'End time cannot be blank';
    }
    
    return errors;
}


module.exports.home = async (req, res ) => {

    db.any(`SELECT users.id, firstname, lastname, email, day, to_char(start_at, 'HH:MI AM') AS start_at, to_char(end_at, 'HH:MI AM') AS end_at  from users right join schedules on users.id = schedules.id_user`)
         .then(users => {        
            res.render('pages/index', {
                users
            })
    })
    .catch(error => {
        console.log(error)    
    }); 
}

module.exports.employee = (req, res) => {
    db.any(`SELECT firstname, lastname, email, day, to_char(start_at, 'HH:MI AM') AS start_at, to_char(end_at, 'HH:MI AM') AS end_at from users left join schedules on users.id = schedules.id_user where users.id = $1`, [parseInt(req.params.id)])
    .then(users => {      
        res.render('pages/employees', {
        users
    })
})
.catch(error => {
    console.log(error)    
})  
}

module.exports.schedule_get = (req, res) => {
    db.any("SELECT day, to_char(start_at, 'HH:MI AM') AS start_at, to_char(end_at, 'HH:MI AM') AS end_at FROM schedules where id_user = $1", [res.locals.user.id])
            .then(schedules => {   
            res.render('pages/schedules', {
                schedules
            })
    })
    .catch(error => {
        console.log(error)    
    });    
}

module.exports.schedule_post = (req, res) => {
    const { day, starttime, endtime } = req.body;

    const errors = handleErrorSchedules(day, starttime, endtime)
    .then( errors => {
        if(errors.day === '' && errors.starttime === '' && errors.endtime === '')
        {   
            db.none('INSERT INTO schedules(id_user, day, start_at, end_at) VALUES($1, $2, $3, $4);', [res.locals.user.id, day, starttime, endtime])
            .then(() => {
                res.status(201).json({ schedules: "ok" });
            })
            .catch(error => {
            console.log(error)
            })        
        }
        else {
            res.status(400).json({ errors });
        }
    })




}