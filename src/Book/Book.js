import React from 'react';
import { Link } from 'react-router-dom';

import './Book.css';

class Book extends React.Component
{
    render() {
        return (
            <div className="Book">
                {this.props.noLink ?
                    <h3 className="Book__header">{this.props.book.name}</h3>
                :
                    <Link to={"/books/"+this.props.book.id+"/view"}>
                        <h3 className="Book__header">{this.props.book.name}</h3>
                    </Link>
                }
                <div className="Book__entry">
                    <span>By {this.props.book.author}</span>
                </div>
                <div className="Book__entry">
                    <strong>Rating: </strong>
                    <span>{this.props.book.rating}</span>
                </div>
                <div className="Book__entry">
                    <strong>Genre: </strong>
                    <span>{this.props.genre.name}</span>
                </div>
                <div className="Book__entry">
                    <p>{this.props.book.description}</p>
                </div>
                <div className="Book__entry">
                    <Link to={"/books/" + this.props.book.id + "/edit"}>
                        <button>Edit</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Book;