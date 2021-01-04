import React from 'react';
import { Link } from 'react-router-dom';

import Book from '../Book/Book';

import './BookList.css';

class BookList extends React.Component
{
    static defaultProps = {
        books: [],
        genres: []
    }

    state = {
        ratingFilter: 0,
        genreFilter: '*'
    }

    onRatingFilterChanged(ratingFilter) {
        this.setState({ratingFilter: parseInt(ratingFilter)})
    }

    isRatingValid = (rating) => {
        return this.state.ratingFilter <= rating;
    }

    onGenreFilterChanged(genreFilter) {
        this.setState({genreFilter});
    }

    isGenreValid = (genre) => {
        return this.state.genreFilter === '*' || this.state.genreFilter === genre;
    }

    render() {
        return (
            <div className="BookList">
                <div className="BookList__toolbar">
                    <Link to="/books/add"><button>Add Book</button></Link>
                    <Link to="/books/random"><button>Random Book</button></Link>
                    <label htmlFor="ratingFilter">Rating: </label>
                    <select
                        id="ratingFilter"
                        onChange={e => {this.onRatingFilterChanged(e.target.value)}}
                    >
                        <option value="1">All</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5</option>
                    </select>
                    <label htmlFor="genreFilter">Genre: </label>
                    <select
                        id="genreFilter"
                        onChange={e => this.onGenreFilterChanged(e.target.value)}
                    >
                    <option value="*">All</option>
                        {
                            [
                                'Action',
                                'Adventure',
                                'Classic',
                                'Comic/Graphic Novel',
                                'Mystery/Detective',
                                'Fantasy',
                                'Science Fiction',
                                'Historical Fiction',
                                'Horror',
                                'Literary Fiction',
                                'Romance',
                                'Short Story',
                                'Suspense/Thriller',
                                'Women\'s Fiction',
                                'Biography/Autobiography',
                                'Cookbook',
                                'Essay',
                                'History',
                                'Memoir',
                                'Poetry',
                                'Self-Help',
                                'True Crime',
                            ].map((genre) => {
                                return <option key={genre} value={genre}>{genre}</option>
                            })
                        }
                    </select>
                </div>
                <div className="BookList__list">
                    {this.props.books.map((book) => {
                        let genre = this.props.genres.find((genre) => {
                            if(genre.id === book.genre) {
                                return genre
                            }
                        });
                        if(this.isRatingValid(book.rating)) {
                            if(this.isGenreValid(book.genre)) {
                                return <Book 
                                    key={book.id}
                                    book={book}
                                    genre={genre}
                                />
                            }
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default BookList;