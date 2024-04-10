require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/books');

const dataBaseURL = process.env.DATABASE_URL;


async function seedBooks() {
    await mongoose.connect(dataBaseURL);
    console.log('Connected to MongoDB');


    const books = [
        { title: 'The Great Gatsby', description: 'A novel set in the Roaring Twenties...', status: 'Available' },
        { title: 'Moby Dick', description: 'The saga of Captain Ahab...', status: 'Available' },
        { title: 'War and Peace', description: 'A tale of the Napoleonic Wars...', status: 'Available' },
        { title: '1984', description: 'A dystopian social science fiction novel and cautionary tale...', status: 'Available' },
        { title: 'The Catcher in the Rye', description: 'A novel about teenage rebellion and alienation...', status: 'Available' },
        { title: 'To Kill a Mockingbird', description: 'A novel about childhood in a sleepy Southern town and the crisis of conscience that rocked it...', status: 'Available' },
        { title: 'Pride and Prejudice', description: 'A romantic novel of manners...', status: 'Available' },
        { title: 'The Lord of the Rings', description: 'An epic high-fantasy novel...', status: 'Available' },
        { title: 'The Chronicles of Narnia', description: 'A series of seven high fantasy novels...', status: 'Available' },
        { title: 'Brave New World', description: 'A dystopian social science fiction novel about a futuristic World State society...', status: 'Available' },
    ];

    try {
        await Book.insertMany(books);
        console.log('Successfully seeded database with books.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await mongoose.connection.close();
    }
}
seedBooks();