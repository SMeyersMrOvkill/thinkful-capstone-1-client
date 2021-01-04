import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddBook from './AddBook';

describe('AddBook Component', () => {
  it('Should create an instance of the <AddBook /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><AddBook /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})