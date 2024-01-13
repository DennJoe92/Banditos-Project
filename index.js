const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB Atlas
const atlasConnectionString = 'mongodb+srv://joeplamos:<LennyOzzy23%21>@golfsociety.3bgjga1.mongodb.net/';
mongoose.connect(atlasConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// ...
