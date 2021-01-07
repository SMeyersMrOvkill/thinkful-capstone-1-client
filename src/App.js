import React from 'react';
import { Route } from 'react-router-dom';

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
import RegisterPage from './RegisterPage/RegisterPage';

class App extends React.Component 
{
  state = {
      error: '',
      books: [],
  }

  getAllBooks() {
    fetch(`${config.API_ENDPOINT}/books`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${TokenService.getAuthToken()}`
        }
        }).then(books => {
        return books.json();
        }).then(data => {
            //console.log(data);
            if(data.hasOwnProperty('error')) {
                this.setState({error: data.error});
                if(data.error === "Unauthorized request") {
                    this.setState({error: <LoginPage />})
                }
            }
            console.log({books: data});
            //this.setState(books: [...data], error: {}});
            this.setState({error: '', books: data});
        })
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
              updateBook: this.updateBook,
              addBook: this.addBook,
              deleteBook: this.deleteBook
          }}>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/books/add" component={AddBook} />
                <Route exact path="/books" render={routeProps => {
                    console.log(this.state.books, this.state.genres)
                    return <BookList books={this.state.books} genres={this.state.genres} />;
                }} />
                <Route exact path="/books/:id/view" render={routeProps => {
                    const { id } = routeProps.match.params;
                    const book = helpers.findBook(this.state.books, id)
                    console.log("Book", book)
                    return <ViewBook book={book} />
                }} />
                <Route exact path="/books/:id/edit" render={routeProps => {
                    const { id } = routeProps.match.params;
                    const book = helpers.findBook(this.state.books, id);
                    return <EditBook book={book} />
                }} />
            </BookContext.Provider>
            }
          </div>
      );
  }
}

export default App;
