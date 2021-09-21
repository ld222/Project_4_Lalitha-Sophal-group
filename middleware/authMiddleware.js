const jwt = require('jsonwebtoken'); 
const db = require('../postgresql');
require('dotenv').config();

// Check whether JWT token is valid
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if(err) {
                console.log(err);
                res.redirect('/login');
            }
            else {
                next();
            }
        })
    }
    else {
        res.redirect('/login');
    }
}

// Check if the user is already logged in, redirect to home if they are already logged
const alreadyAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if(err) {
                console.log(err);
                next();
            }
            else {
                res.redirect('/');
            }
        })
    }
    else {
        next();
    }
}


// Check which user is currently logged in
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt; 

    if(token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) =>{
            if(err) {
                console.log(err.message);
                res.locals.email = null;
                next();
            }
            else {
                res.locals.email = decodedToken.email;
                next();
            }
        })
    }
    else {
        res.locals.email = null;
        next();
    }
};

const checkUserSchedule = (req, res, next) => {
    const token = req.cookies.jwt; 

    if(token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) =>{
            if(err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else {
                const user = await db.oneOrNone('SELECT id FROM Users WHERE email = $1', [decodedToken.email]);
                res.locals.user = user;
                next();
            }
        })
    }
    else {
        res.locals.user = null;
        next();
    }
};


module.exports =  {requireAuth, alreadyAuth, checkUserSchedule, checkUser };