import React from 'react';
import { Link } from 'react-router-dom';

import Book from '../Book/Book';

import './ViewBook.css';

class ViewBook extends React.Component
{
    render() {
        return (
            <div className="ViewBook">
                <Link to="/books">
                    <button className="ViewBook__back">Back to List</button>
                </Link>
                <Book
                    noLink={true}
                    book={this.props.book}
                    genre={this.props.genre}
                    />
            </div>
        )
    }
}

export default ViewBook;