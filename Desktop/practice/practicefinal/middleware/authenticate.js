// middleware/authenticate.js
const userModel = require('../models/user');

const authenticateMiddleware = (req, res, next) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = userModel.findByUsername(username);

  // Check if the user exists and the password is correct
  if (user && user.password === password) {
    // Attach the user object to the request for later use
    req.user = user;
    next(); // Proceed to the next middleware or route
  } else {
    res.status(401).send('Authentication failed');
  }
};

module.exports = authenticateMiddleware;

