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

// Check which user is  currently logged in
const checkUser =  (req, res, next) => {
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

module.exports =  {requireAuth, checkUser };