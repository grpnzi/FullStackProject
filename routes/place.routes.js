const express = require('express');
const Place = require('../models/Place.model');
const User = require('../models/User.model');
const router = express.Router();

const fileUploader = require('../config/cloudinary.config');

//PLACES LIST
// /places-list	GET	Get list of all places
router.get('/places', (req, res) => {
  Place.find()
    .then(places => {
      res.render('places/places', { places });
    })
    .catch(error => {
      console.error(error);
      res.send('Error fetching data');
    });
});


// /create	GET	Get new place form

router.get("/places/create", (req, res ) => {
  res.render("places/create-new-place");
});


// /create	POST	Create new place

router.post('/places/create', fileUploader.single('img') ,(req, res) => {
  console.log(req.file.path);
  const { name, location, description, source } = req.body;
  if(!name || !location || !description || !source ){
      res.render("places/create-new-place");
      return 
  }
  Place.create({ name, location, description, img: req.file.path, author: req.session.currentUser._id, source})
    .then(newPlace => {
      res.render('places/place-details', newPlace);
    })
    .catch(error => {
      console.error(error);
      res.status(500).render('places/create-new-place', { errorMessage: 'Error creating a place' });
  });
});



// /places/:placeId	GET	Get details of place
router.get('/places/:placeId',(req, res) => {

    Place.findById(req.params.id).populate('author')

    .then((places) =>{
        res.render('places/place-details', { places }); 
    })
     
    .catch ((error)=> {
      console.error(error);
      res.send('Error fetching data', error);

    })

  }); 


// /edit/:placeId	get	edit place

router.get('/places/:placeId/edit',(req, res) => {

    Place.findById(req.params.id).populate('author')

    .then((places) =>{
        res.render('places/place-edit', { places }); 
    })
     
    .catch ((error)=> {
      console.error(error);
      res.send('Error fetching data');
    })
  }); 

  //POST edit places

  router.post('/places/:placeId/edit', (req, res) => {
    const { name, location, description, img } = req.body;
    
    Place.findByIdAndUpdate({ _id: req.params.placeId }, { name, location, description, img}, {new: true} )
      .then(() => {
        res.redirect(`/places/${req.params.placeId}`);
      })
      .catch(error => {
        console.error(error);
        res.send('Error updating data');
      });
  });
  
  // DELETE we need to create a form in place-edit.hbs

  router.post('/places/:placeId/delete', (req, res) => {
    console.log(req.params.placeId);
    Place.findByIdAndRemove(req.params.placeId)
      .then(() => {
        res.redirect('/');
      })
      .catch(error => {
        console.error(error);
        res.send('Error deleting data');
      });
  });
      






module.exports = router;