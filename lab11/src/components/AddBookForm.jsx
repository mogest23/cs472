import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';

const AddBookForm = () => {
    const navigate = useNavigate();
    const { addBook } = useBookContext();
    const [formData, setFormData] = useState({
        title: '',
        author: ''
    });
    const [error, setError] = useState('');

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
            await addBook(formData);
            // Reset form and navigate to home
            setFormData({ title: '', author: '' });
            navigate('/');
        } catch (err) {
            setError('Failed to add book');
        }
    };

    return (
        <div className="add-book-form">
            <h2>Add New Book</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter book title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter author name"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">Add Book</button>
                    <button type="button" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddBookForm; 