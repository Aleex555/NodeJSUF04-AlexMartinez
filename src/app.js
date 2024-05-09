const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const userRoutes = require('./api/routes/userRoutes');
const eventRoutes = require('./api/routes/eventRoutes');
const app = express();

app.use(express.json());
// Farà que la sortida JSON estigui ben identada i formatada.
app.set('json spaces', 2);

mongoose.connect(dbConfig.MONGODB_URI).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));




app.use('/api', userRoutes);
app.use('/api', eventRoutes)


module.exports = app;
