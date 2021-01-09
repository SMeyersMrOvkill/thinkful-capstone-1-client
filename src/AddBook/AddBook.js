import React from 'react';
import { withRouter } from 'react-router-dom';
import BookContext from '../BookContext';

import '../Form.css';

class AddBook extends React.Component {

    static contextType = BookContext;

    constructor() {
        super();
        this.state = {
            name: {
                value: '',
                touched: false,
            },
            description: {
                value: '',
                touched: false,
            },
            rating: {
                value: 0,
                touched: false,
            },
            author: {
                value: '',
                touched: false,
            },
            genre: {
                value: 0,
                touched: false,
            },
        };
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}});
    }

    updateDescription(description) {
        this.setState({description: {value: description, touched: true}});
    }

    updateRating(rating) {
        this.setState({rating: {value: parseInt(rating), touched: true}});
    }

    updateAuthor(author) {
        this.setState({author: {value: author, touched: true}});
    }

    updateGenre(genre) {
        this.setState({genre: {value: genre, touched: true}});
    }

    cancel = () => {
        this.props.history.push("/books");
    }

    submit = (e) => {
        e.preventDefault();
        this.context.addBook({
            name: this.state.name.value,
            description: this.state.description.value,
            rating: this.state.rating.value,
            author: this.state.author.value,
            genre: this.state.genre.value
        })
        this.props.history.push('/books');
    }

    render() {
        return (
            <div className="Form">
                <form>
                    <div className="Form__form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            onChange={e => {this.updateName(e.target.value)}} />
                    </div>
                    <div className="Form__form-group">
                        <label htmlFor="description">Description: </label>
                        <input
                            id="description"
                            onChange={e => {this.updateDescription(e.target.value)}} />
                    </div>
                    <div className="Form__form-group">
                        <label htmlFor="rating">Rating: </label>
                        <select onChange={e => {this.updateRating(e.target.value)}}>
                            <option value="0">Please select an option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="Form__form-group">
                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            onChange={e => {this.updateAuthor(e.target.value)}} />
                    </div>
                    <div className="Form__form-group">
                        <label htmlFor="genre">Genre: </label>
                        <select onChange={e => {this.updateGenre(e.target.value)}}>
                            <option value="0">Please select an option</option>
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
                    <hr />
                    <div className="Form__form-group">
                    <button className="Form__button-cancel" onClick={this.cancel}>Cancel</button>
                    </div>
                    <hr />
                    <div className="Form__form-group">
                        <button onClick={this.submit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(AddBook);