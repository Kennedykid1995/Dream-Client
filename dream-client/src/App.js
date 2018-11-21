import React, { Component } from 'react';
import './App.css';
import {NavLink, Route} from 'react-router-dom';
import Nav from './website pages/nav'; 
import Home from './website pages/home';
import styled from 'styled-components';

const Website = styled.div`
  display: flex; 
  width: 100%;
  justify-content: center; 
  flex-direction: column;
`

const Pages = styled.div`
  width: auto; 
  display: flex;
`
class App extends Component {
  render() {
    return (
      <Website>
        <div>
          <Nav />
        </div>
        <Pages>
        <Route
            exact
            path="/"
            render={props => <Home {...props} />}
          />
        </Pages>
      </Website>
    );
  }
}

export default App;
