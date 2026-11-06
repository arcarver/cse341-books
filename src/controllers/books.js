import { getAllBooks } from "../models/books";

const getBooksHandler = async (req, res) => {
    try {
        const books = await getAllBooks();
        return res.status(200).json(books);
    } catch (error) {
        console.error('GET /books failed:', error.message);
        return res.status(500).json({ messge: 'Internal server error' });
    }
};

export { getBooksHandler}