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

// Post route for creating a book
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body); 
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete route to delete book by ID
router.delete('/:id', async  (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully', deletedBook });
    }   catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

module.exports = getBooks;

