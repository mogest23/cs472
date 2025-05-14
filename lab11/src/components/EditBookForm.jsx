import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';

const EditBookForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { books, updateBook, loading } = useBookContext();

    const [formData, setFormData] = useState({
        title: '',
        author: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (id && books.length > 0) {
            const bookToEdit = books.find(book => book.id === id);
            if (bookToEdit) {
                setFormData({
                    title: bookToEdit.title,
                    author: bookToEdit.author
                });
            } else {
                setError('Book not found');
            }
        }
    }, [id, books]);

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
            await updateBook(id, formData);
            navigate('/'); // Redirect to home after successful update
        } catch (err) {
            setError('Failed to update book');
        }
    };

    if (loading) return <div>Loading...</div>;

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
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default EditBookForm; 