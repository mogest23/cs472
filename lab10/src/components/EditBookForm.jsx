import React, { useState, useEffect } from 'react';
import { useBookContext } from '../context/BookContext';

const EditBookForm = ({ book, onCancel }) => {
    const { updateBook } = useBookContext();
    const [formData, setFormData] = useState({
        title: '',
        author: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title,
                author: book.author
            });
        }
    }, [book]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.title.trim() || !formData.author.trim()) {
            setError('All fields are required');
            return;
        }

        try {
            await updateBook(book.id, formData);
            onCancel(); // Close the edit form
        } catch (err) {
            setError('Failed to update book');
        }
    };

    return (
        <div className="edit-book-form">
            <h2>Edit Book</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="edit-title">Title:</label>
                    <input
                        type="text"
                        id="edit-title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter book title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="edit-author">Author:</label>
                    <input
                        type="text"
                        id="edit-author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter author name"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Update Book</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditBookForm; 