import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>Todo List</h1>
            <p>Currently you have {books.length} tasks remaining</p>
        </div>
    );
}

export default Navbar;