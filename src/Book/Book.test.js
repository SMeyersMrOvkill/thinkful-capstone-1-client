import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Book from './Book';

describe('Book Component', () => {
  it('Should create an instance of the <Book /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Book /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})