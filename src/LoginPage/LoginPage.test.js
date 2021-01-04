import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';

describe('LoginPage Component', () => {
  it('Should create an instance of the <LoginPage /> Component without crashing.', () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter><LoginPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})