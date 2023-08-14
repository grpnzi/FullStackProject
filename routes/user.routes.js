const router = require("express").Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const mongoose = require('mongoose')
const User = require("../models/User.model");


router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.get("/user-profile", (req, res) => {
    res.render("users/user-profile")
})


router.post("/signup", (req, res, next) => {

    const {username, email, password, country} = req.body

    if (!username || !email|| !password || !country) {
        res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide all the information.' });
        return;
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
        res
            .status(500)
            .render('auth/signup', { errorMessage: 'Password needs to have at least 6 characterss and must contain at least one number, one lowercase and one uppercase letter.' });
        return;
    }

    bcryptjs
        .genSalt(saltRounds)
        .then((salt) => bcryptjs.hash(password, salt))
        .then((hashedPassword) => {
            return User.create({
                username,
                email,
                password: hashedPassword,
                country
            })
        })
})
    

const User = model("User", userSchema);

module.exports = User;
