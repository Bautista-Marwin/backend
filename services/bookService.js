import * as bookModel from '../models/bookModel.js';

export const fetchALLBooks = async() =>{
    const books = await bookMode.fetch();
    return books;
}