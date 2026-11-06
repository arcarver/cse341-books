import express from 'express';
import { getBooksHandler } from "./controllers/books";

const router = express.Router(); 
router.get('/books', getBooksHandler);

export default router;