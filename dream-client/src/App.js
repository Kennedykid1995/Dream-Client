import React, { Component } from 'react';
import './App.css';
import {NavLink, Route} from 'react-router-dom';
import Nav from './website pages/nav'; 
import Home from './website pages/home';
import styled from 'styled-components';

const Website = styled.div` 
  width: 100%;
`
const NavHolder = styled.div`
  display: flex; 
  justify-content: center;
`
const Pages = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 65px;
`
class App extends Component {
  render() {
    return (
      <Website>
        <NavHolder>
          <Nav />
        </NavHolder>
        <Pages>
          <Route 
            exact
            path="/"
            render={props => <Home {...props}/>}
            />
          </Pages>
      </Website>
    );
  }
}

export default App;
