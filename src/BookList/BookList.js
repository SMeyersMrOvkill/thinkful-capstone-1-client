import React from 'react';
import { Link } from 'react-router-dom';

import Book from '../Book/Book';

import './BookList.css';

class BookList extends React.Component
{
    render() {
        return (
            <div className="BookList">
                <div className="BookList__toolbar">
                    <Link to="/books/add"><button>Add Book</button></Link>
                    <Link to="/books/random"><button>Random Book</button></Link>
                </div>
                <div className="BookList__list">
                    {this.props.books.map((book) => {
                        let genre = this.props.genres.find((genre) => {
                            if(genre.id === book.genre) {
                                return genre
                            }
                        });
                        return <Book 
                            key={book.id}
                            book={book}
                            genre={genre}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default BookList;