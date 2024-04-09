const express = require('express');
const Book = require('../models/books'); 
const router = express.Router(); 

// Route to get all books
async function getBooks(req, res) {
  try {
    const books = await Book.find({}); 
    res.json(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = getBooks;

