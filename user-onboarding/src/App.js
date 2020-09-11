import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import styled from 'styled-components';

const Header = styled.h1`
  color: darkgreen;
`
function App() {
  return (
    <div className="App">
      <Header>Sign up form</Header>
      <Form/>
    </div>
  );
}

export default App;
