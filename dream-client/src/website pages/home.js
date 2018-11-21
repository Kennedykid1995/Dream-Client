import React, { Component } from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
 
`
const Banner = styled.img`

`
class Home extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <HomePage>
                <Banner src="https://images.unsplash.com/photo-1510442590145-1ea52d75f1c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=26f6ec4bc64c91db500b078590cbb4e5&auto=format&fit=crop&w=889&q=80" />
            </HomePage>
        )
    }
}
export default Home;