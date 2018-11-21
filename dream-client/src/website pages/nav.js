import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


const NavBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto; 
    height: auto;  
`
const NavItem = styled(NavLink)`
    font-size: 25px;
    font-family: 'Fredoka One', cursive;
    text-decoration: none; 
    color: red;
    margin: 10px 20px;
    &:hover{
        position: relative;
    }
    :before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: red;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
      }
    :hover:before{
        visibility: visible;
        transform: scaleX(1);
      }
`

const Logo = styled.div`
      width: auto;
      height: auto;
      color: red;
      font-family: 'Fredoka One', cursive;
      margin: 10px 20px;
      font-size: 20px;
`
class Nav extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <NavBox>
                <NavItem to="/">
                    HOME
                </NavItem>
                <NavItem to="/">
                    MENU
                </NavItem>
                <NavItem to="/">
                    LOCATIONS
                </NavItem>
                <NavItem to="/">
                    ABOUT
                </NavItem>
                <Logo>
                    The<br />Dumpling<br />Company
                </Logo>
            </NavBox>
        )
    }
}
export default Nav;