import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewBook from './ViewBook';

describe('ViewBook Component', () => {
  it('Should create an instance of the <ViewBook /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><ViewBook /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})