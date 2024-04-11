const express = require('express');
const Book = require('../models/books'); 
const router = express.Router(); 


// GET route to get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({}); 
    res.json(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST route for creating a book
router.post('/', async (req, res) => {
    try {
        console.log('req.body', req.body);
        const book = new Book(req.body); 
        let addedBook = await book.save();
        res.status(201).json(addedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE route to delete book by ID
router.delete('/:id', async  (req, res) => {
  console.log('am i even here');
   try {
        console.log('inside of delete function');
        console.log('req.params.id', req.params.id);
        const id = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully', deletedBook });
    }   catch (error) {
        res.status(500).json({ message: error.message });
      }
});



// const deleteBook = async (req, res) => {
//   try {
//        console.log('inside of delete function');
//        console.log('req.params.id', req.params.id);
//        const id = req.params.id;
//        const deletedBook = await Book.findByIdAndDelete(id);
//        if (!deletedBook) {
//            return res.status(404).json({ message: 'Book not found' });
//        }
//        res.json({ message: 'Book deleted successfully', deletedBook });
//    }   catch (error) {
//        res.status(500).json({ message: error.message });
//      }
//    };



// Delete route to clear books database
router.get('/clear', async (req, res) => {
  console.log('inside of delete function')
    try {
      await Book.deleteMany({});
      res.json({ message: "All books have been deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;


