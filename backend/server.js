const winston = require('winston');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const path = require('path');

// Server log
console.log(process.env.NODE_ENV);
console.log(process.env.MONGO_URI);
console.log(process.env.JWT_PRIVATE_KEY);
console.log(process.env.SECRET_OR_KEY);
console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET);

// Morgan logger middleware
app.use(morgan('tiny'));
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./src/server/config/logging')();
require('./src/server/config/db')();
require('./src/server/config/validation')();
require('./src/server/config/routes')(app);

// Passport middleware
app.use(passport.initialize());
// Passport Config
require('./src/server/config/passport')(passport);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('src/client/build'));
	console.log("html file path => ", path.resolve(__dirname, 'src', 'client', 'build', 'index.html'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
const server = app.listen(port, () =>
  winston.info(`Server started on port ${port}...`)
);

module.exports = server;