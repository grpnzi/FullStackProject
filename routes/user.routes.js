const router = require("express").Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const mongoose = require('mongoose')
const User = require("../models/User.model");


// SIGN UP ROUTES ------------------------------------------
router.get("/signup", (req, res) => {
    res.render("auth/signup")
})

router.get("/user-profile", (req, res) => {
    res.render("users/user-profile")
})

router.post("/signup", (req, res, next) => {

    const {username, email, password, country} = req.body

    if (!username || !email|| !password || !country) {
        res.render("auth/signup", { errorMessage: "All fields are mandatory. Please provide all the information." });
        return;
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
        res
            .status(500)
            .render("auth/signup", { errorMessage: "Password needs to have at least 6 characters and must contain at least one number, one lowercase and one uppercase letter." });
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
        .then(createdUser => {
            console.log("New user: ", createdUser);
            res.render("users/user-profile", {createdUser});
          })
          .catch(error => {
              if (error instanceof mongoose.Error.ValidationError) {
                  res.status(500).render("auth/signup", { errorMessage: error.message });
              } else {
                  next(error);
              }
          });
})



//LOG IN ROUTES ------------------------------------------
router.get("/login", (req, res) => {
    res.render("auth/login")
})

router.post("/login", (req, res, next) => {
    const { username, password } = req.body;

    console.log("SESSION =====> ", req.session);

    if (username === "" || password === "") {
        res.render("auth/login", {
            errorMessage: "Please enter both email and password to login."
        });
        return;
    }

    User.findOne({ username })
        .then(user => {
            if (!user) {
                console.log("Username not registered.");
                res.render("auth/login", { errorMessage: "Incorrect user and/or password." });
                return;
            } else if (bcryptjs.compareSync(password, user.password)) {
                req.session.currentUser = user;
                res.redirect("/user-profile", {user});
            } else {
                console.log("Incorrect password. ");
                res.render("auth/login", { errorMessage: "Incorrect user and/or password." });
            }
        })
        .catch(error => next(error));
})



// USER PROFILE ROUTES ------------------------------------------
router.get("/user-profile/:userId", (req, res, next) => {
    const userId = req.params.userId

    User.findById(userId)
        .then((foundUser) => {
            res.render("users/user-profile", {foundUser})
        })
        .catch(error => {
            console.log("Error while retrieving user details.");
            next(error);
        })
})

// router.get("/user-profile/:userId/edit", (req, res, next) => {
//     const userId = req.params.userId

//     User.findById(userId)
//         .then((foundUser) => {
//             res.render("users/user-edit", {foundUser})
//         })
//         .catch(error => {
//             console.log("Error while retrieving user details.");
//             next(error);
//         })    
// })

// router.post("/user-profile/:userId/edit", (req, res, next) => {

//     const userId = {
//         username: req.body.username,
//         email: req.body.email,
//         country: req.body.country
//     }

//     User.findByIdAndUpdate(userId)
//         .then(() => res.redirect(`/user-profile/${userId}`))
//         .catch(error => {
//             console.log("Error while updating user details.");
//             next(error);
//         })   
// })



// LOG OUT ROUTES ------------------------------------------
router.post("/logout", (req, res, next) => {
    req.session.destroy(err => {
      if (err) next(err);
      res.redirect('/');
    });
})


module.exports = router;