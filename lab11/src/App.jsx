import React from 'react';
import { BookProvider } from './context/BookContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import EditBookForm from './components/EditBookForm';
import './App.css';

const App = () => {
    return (
        <BookProvider>
            <Router>
                <div className="app">
                    <header>
                        <h1>Book Library Management</h1>
                        <nav className="nav-menu">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/add" className="nav-link">Add Book</Link>
                        </nav>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/" element={<BookList />} />
                            <Route path="/add" element={<AddBookForm />} />
                            <Route path="/edit/:id" element={<EditBookForm />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </BookProvider>
    );
};

export default App; 