'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const dataBaseURL = process.env.DATABASE_URL;

mongoose.connect(dataBaseURL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Test route
app.get('/test', (request, response) => {
  response.send('test request received');
});

// Books route
app.get('/books', getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));