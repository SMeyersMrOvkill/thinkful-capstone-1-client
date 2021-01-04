import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditBook from './EditBook';

describe('EditBook Component', () => {
  it('Should create an instance of the <EditBook /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><EditBook /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})