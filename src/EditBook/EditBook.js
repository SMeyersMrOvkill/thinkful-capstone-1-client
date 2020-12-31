import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BookContext from '../BookContext';

import '../Form.css';

class EditBook extends React.Component
{

    static contextType = BookContext;

    state = {
        name: {
            value: '',
        },
        description: {
            value: '',
        },
        rating: {
            value: 1,
        },
        author: {
            value: ''
        },
        genre: {
            value: 3,
        }
    }

    componentDidMount() {
        this.setState({
            name: {value: this.props.book.name},
            description: {value: this.props.book.description},
            author: {value: this.props.book.author}
        })
    }

    updateName(name) {
        this.setState({name: {value: name}});
    }

    updateDescription(description) {
        this.setState({description: {value: description}});
    }

    updateRating(rating) {
        this.setState({rating: {value: parseInt(rating)}});
    }

    updateAuthor(author) {
        this.setState({author: {value: author}});
    }

    updateGenre(genre) {
        this.setState({genre: {value: parseInt(genre)}});
    }

    submit = (e) => {
        e.preventDefault();
        this.context.updateBook({
            id: this.props.book.id,
            name: this.state.name.value,
            description: this.state.description.value,
            rating: this.state.rating.value,
            author: this.state.author.value,
            genre: this.state.genre.value,
            owner: this.props.book.owner
        })
        this.props.history.push('/books');
    }

    deleteBook = () => {
        this.context.deleteBook(this.props.book);
    }

    render() {
        return (
            <BookContext.Consumer>
            {({books, genres}) => {
                return (
                    <div className="Form">
                        <Link to="/books/">
                            <button>Cancel</button>
                        </Link>
                        <button onClick={this.deleteBook}>Delete</button>
                        <form>
                            <div className="Form__form-group">
                                <label htmlFor="name">Name: </label>
                                <input 
                                className="Form__form-control" 
                                id="name" 
                                onChange={e => this.updateName(e.target.value)}
                                defaultValue={this.props.book.name} />
                            </div>
                            <div className="Form__form-group">
                                <label htmlFor="description">Description: </label>
                                <textarea 
                                className="Form__form-control" 
                                id="description"
                                onChange={e => this.updateDescription(e.target.value)}
                                defaultValue={this.props.book.description} />
                            </div>
                            <div className="Form__form-group">
                                <label htmlFor="rating">Rating: </label>
                                <select 
                                className="Form__form-control" 
                                id="rating"
                                onChange={e => this.updateRating(e.target.value)} >
                                    {[1, 2, 3, 4, 5].map((itm) => {
                                        if(itm === this.props.book.rating) {
                                            return <option value={itm} selected>{itm}</option>
                                        } else {
                                            return <option value={itm}>{itm}</option>
                                        }
                                    })}
                                </select>
                            </div>
                            <div className="Form__form-group">
                                <label htmlFor="author">Author: </label>
                                <input 
                                className="Form__form-control" 
                                id="author" 
                                onChange={e => this.updateAuthor(e.target.value)}
                                defaultValue={this.props.book.author} />
                            </div>
                            <div className="Form__form-group">
                                <label htmlFor="genre">Genre: </label>
                                <select 
                                className="Form__form-control" 
                                id="genre"
                                onChange={e => this.updateGenre(e.target.value)} >
                                    {
                                        genres.map((genre) => {
                                            if(this.props.genre.id === genre.id) {
                                                return <option value={genre.id} selected>{genre.name}</option>
                                            } else {
                                                return <option value={genre.id}>{genre.name}</option>
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            <hr />
                            <div className="Form__form-group">
                                <button onClick={this.submit}>Submit</button>
                            </div>
                        </form>
                    </div>
                )
            }}
            </BookContext.Consumer>
        )
    }

}

export default withRouter(EditBook);