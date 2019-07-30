import mongoose from 'mongoose';
// import environmental variables from our variables.env file
import dotenv from 'dotenv';
dotenv.config();

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!
import './models/Store';
import './models/User';
import './models/Review';

// Start our app!
import app from './app';
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
