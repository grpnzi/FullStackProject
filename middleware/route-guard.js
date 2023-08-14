// middleware/route-guard.js
const express = require('express');

// checks if the user is the author of the post
const isAuthor = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.redirect('/login');
    }
    next();
};

module.exports = {
    isAuthor
};
