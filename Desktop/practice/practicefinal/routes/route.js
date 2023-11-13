const express = require('express');
const router = express.Router();
const Middlewareauthenticate = require('../middleware/authenticate'); // Make sure to adjust the path based on your project structure
const User = require('../models/User');

router.get('/login', Middlewareauthenticate, (req, res) => {
    res.render('login');
});

router.get('/signup', Middlewareauthenticate, (req, res) => {
    res.render('signup');
});

    router.get('/dashboard', Middlewareauthenticate, (req, res) => {
        res.render('dashboard');
    });
    
    router.get('/profile', Middlewareauthenticate, (req, res) => {
        res.render('profile');
    });



router.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = new User({ username, password });
      await user.save();
      res.redirect('/login');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error signing up');
    }
  });



  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (user) {
        res.redirect('/dashboard');
      } else {
        res.render('login', { error: 'Invalid username or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error logging in');
    }
  });









    


module.exports = router;
