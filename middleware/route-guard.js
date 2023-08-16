// middleware/route-guard.js
const express = require('express');

// checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.redirect('/login');
    }
    next();
};

// if an already logged in user tries to access the login page it
// redirects the user to the home page
const isLoggedOut = (req, res, next) => {
    if (req.session.currentUser) {
        return res.redirect('/');
    }
    next();
};


// ccreate function that checks if you are logged in that your session is identical to your user id request.param._id



const authorUser = (req,res,next) => {

    if(req.session.currentUser?._id === req.params.userId) {
        next()
       
    } else {
        return res.redirect('/login')
    }
}

module.exports = {
    isLoggedIn,
    isLoggedOut,
    authorUser
};
