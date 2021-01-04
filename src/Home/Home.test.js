import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  it('Should create an instance of the <Home /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})