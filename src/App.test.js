import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('Should create an instance of the <App /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})