import React from 'react';
import { useBookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';

const BookList = () => {
    const { books, loading, error, deleteBook } = useBookContext();

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!books.length) return <div>No books available.</div>;

    return (
        <div className="book-list-container">
            <h2>Books Collection</h2>
            <div className="book-grid">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <div className="book-actions">
                            <Link
                                to={`/edit/${book.id}`}
                                className="edit-btn"
                            >
                                Edit
                            </Link>
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
        </div>
    );
};

export default BookList; 