import React, { Component } from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
 display: flex;
 justify-content: center;
 font-family: 'Fredoka One', cursive;
`

const Logo = styled.div`
    width: 450px;
    height: 450px;
    border-radius: 300px;
    background: red;
    animation: square-to-circle 4s 1s infinite;
    @keyframes square-to-circle {   
        0%  {     
            width: 450px;
            height: 450px         
        }   
       50%{
            width: 400px;
            height: 400px
       }
        100%  {      
            width: 450px;
            height: 450px            
        }   
      }
` 
const LogoText = styled.header`
    font-size: 50px;
    position: absolute;
    top: 56%;
    left: 51%;
    transform: translate(-50%, -50%);
    color: white
    animation: text 4s 1s infinite;
    @keyframes text{   
        0%  {     
            font-size: 50px;       
        }   
       50%{
            font-size: 45px
       }
        100%  {      
            font-size: 50px;           
        }   
      }
`

const Body = styled.div`

`
class Home extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <HomePage>
                <Logo>
                </Logo>
                <LogoText>The <br /> Dumpling <br /> Company</LogoText>
            </HomePage>
        )
    }
}
export default Home;