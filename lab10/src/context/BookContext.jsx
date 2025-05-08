import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://67d17ef590e0670699ba5929.mockapi.io/books';
const BookContext = createContext(null);

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setBooks(response.data); // MockAPI returns array directly
            setError(null);
        } catch (err) {
            setError('Error fetching books: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const addBook = async (newBook) => {
        try {
            setLoading(true);
            const response = await axios.post(API_URL, newBook);
            setBooks([...books, response.data]);
            return response.data;
        } catch (err) {
            setError('Error adding book: ' + err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateBook = async (id, updatedBook) => {
        try {
            setLoading(true);
            const response = await axios.put(`${API_URL}/${id}`, updatedBook);
            setBooks(books.map(book => book.id === id ? response.data : book));
            return response.data;
        } catch (err) {
            setError('Error updating book: ' + err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteBook = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/${id}`);
            setBooks(books.filter(book => book.id !== id));
        } catch (err) {
            setError('Error deleting book: ' + err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <BookContext.Provider value={{
            books,
            loading,
            error,
            addBook,
            updateBook,
            deleteBook
        }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBookContext must be used within a BookProvider');
    }
    return context;
}; 