import * as bookService from '../services/bookService.js';

export const fetchAllBooks = async (req, res) =>{
    cons books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}