import React, { useState } from 'react';
import { BookProvider } from './context/BookContext';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';
import './App.css';

const App = () => {
    const [editingBook, setEditingBook] = useState(null);

    return (
        <BookProvider>
            <div className="app">
                <header>
                    <h1>Book Library Management</h1>
                </header>
                <main>
                    {editingBook ? (
                        <EditBookForm
                            book={editingBook}
                            onCancel={() => setEditingBook(null)}
                        />
                    ) : (
                        <AddBookForm />
                    )}
                    <BookList onEdit={setEditingBook} />
                </main>
            </div>
        </BookProvider>
    );
};

export default App; 