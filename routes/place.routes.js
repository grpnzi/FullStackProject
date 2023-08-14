const express = require('express');
const Place = require('../models/Place.model');
const User = require('../models/User.model');
const router = express.Router();

//PLACES LIST
// /places-list	GET	Get list of all places



// /places/:placeId	GET	Get details of place
router.get('places/:placeId',(req, res) => {

    Place.findById(req.params.id).populate('author')

    .then((places) =>{
        res.render('places/place-details', { places }); 
    })
     
    .catch ((error)=> {
      console.error(error);
      res.send('Error fetching data', error);

    })

  }); 

// /create	GET	Get new place form

router.get("/places/create", (req, res ) => {
    res.render("places/create-new-place");
  });
  

// /create	POST	Create new place



  router.post('/places/create', (req, res) => {
    const { name, location, description, img } = req.body;
    if(!name || !location || !description || !img ){
        res.render("places/create-new-place");
        return 
    }
    Place.create({ name, location, description, img })
      .then(newPlace => {
        res.render('places/place-details', newPlace);
      })
      .catch(error => {
        console.error(error);
        res.redirect('/places/create', { errorMessage: 'Error creating a place' });
      });
  });
  

// /edit/:placeId	GET	all places displayed

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
  

// /edit/:placeId	get	edit place

router.get('places/:placeId/edit',(req, res) => {

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
  
  






module.exports = router;