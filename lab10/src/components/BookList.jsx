import React from 'react';
import { useBookContext } from '../context/BookContext';

const BookList = ({ onEdit }) => {
    const { books, loading, error, deleteBook } = useBookContext();

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!books.length) return <div>No books available.</div>;

    return (
        <div className="book-grid">
            {books.map(book => (
                <div key={book.id} className="book-card">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <div className="book-actions">
                        <button
                            onClick={() => onEdit(book)}
                            className="edit-btn"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteBook(book.id)}
                            className="delete-btn"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList; 