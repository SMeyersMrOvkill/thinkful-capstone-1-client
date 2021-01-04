import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BookList from './BookList';

describe('BookList Component', () => {
  it('Should create an instance of the <BookList /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><BookList /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})