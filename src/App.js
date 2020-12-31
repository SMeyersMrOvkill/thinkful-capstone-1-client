import React from 'react';
import { Link, Route } from 'react-router-dom';

import BookList from './BookList/BookList';
import ViewBook from './ViewBook/ViewBook';
import EditBook from './EditBook/EditBook';
import BookContext from './BookContext';
import AddBook from './AddBook/AddBook';

import config from './config';
import helpers from './helpers';
import TokenService from './services/token-service';

import './App.css';
import LoginPage from './LoginPage/LoginPage';
import Home from './Home/Home';

class App extends React.Component 
{
  state = {
      error: '',
      genres: [],
      books: [],
  }

  getAllBooks() {
      //this.setState(dummyStore);
      console.log('Starting mount...');
      fetch(`${config.API_ENDPOINT}/genres`, {
          method: 'GET',
          headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${TokenService.getAuthToken()}`
          }
      }).then(res => {
        return res.json()
      }).then(data => {
            console.log(data);
            if(data.hasOwnProperty('error')) {
                this.setState({error: data.error});
                if(data.error == "Unauthorized request") {
                    this.setState({error: <Link to="/login">Log In</Link>})
                }
            }
            this.setState({genres: data});
            fetch(`${config.API_ENDPOINT}/books`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                }
                }).then(books => {
                return books.json();
                }).then(data => {
                    console.log(data);
                    if(data.hasOwnProperty('error')) {
                        this.setState({error: data.error});
                        if(data.error == "Unauthorized request") {
                            this.setState({error: <Link to="/login">Log In</Link>})
                        }
                    }
                    this.setState({books: data});
                })
            });
  }

    componentDidMount() {
        this.getAllBooks();
        
    }

    updateBook = (book) => {
        fetch(`${config.API_ENDPOINT}/books/update`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(book)
        }).then(resp => resp.json()).then(data => {
            console.log(data);
            this.getAllBooks();
        });
    }

    addBook = (book) => {
        fetch(`${config.API_ENDPOINT}/books/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(book)
        }).then(resp => resp.json()).then(data => {
            console.log(data);
            window.location = "/books";
            this.getAllBooks();
        });
    }

    deleteBook = (book) => {
        fetch(`${config.API_ENDPOINT}/books/${book.id}/delete`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        }).then(resp => resp.json()).then(data => {
            console.log(data);
            window.location = "/books";
            this.getAllBooks();
        });
    }

  render() {
      return (
          <div className="App">
            {this.state.error !== '' ? this.state.error : 
          <BookContext.Provider value={{
              books: this.state.books,
              genres: this.state.genres,
              updateBook: this.updateBook,
              addBook: this.addBook,
              deleteBook: this.deleteBook
          }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/books/add" component={AddBook} />
                <Route exact path="/books" render={routeProps => {
                    console.log(this.state.books, this.state.genres)
                    return <BookList books={this.state.books} genres={this.state.genres} />;
                }} />
                <Route exact path="/books/:id/view" render={routeProps => {
                    const { id } = routeProps.match.params;
                    const book = helpers.findBook(this.state.books, id)
                    const genre = helpers.findBookGenre(this.state.genres, book)
                    console.log("Book", book)
                    return <ViewBook book={book} genre={genre}/>
                }} />
                <Route exact path="/books/:id/edit" render={routeProps => {
                    const { id } = routeProps.match.params;
                    const book = helpers.findBook(this.state.books, id);
                    const genre = helpers.findBookGenre(this.state.genres, book);
                    return <EditBook book={book} genre={genre} />
                }} />
            </BookContext.Provider>
            }
          </div>
      );
  }
}

export default App;
