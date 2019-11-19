import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';


const H1Style = styled.h1`
width: 30%;
color: white;
font-size: 2rem;
`
const NavBox = styled.nav`
    display: flex;
    align-items: center;

    border-bottom: 1px solid #efefef;
    margin-bottom: 32px;
    background-color: #553555
`

const NavLink = styled(Link)`
margin: 1%;
width: 150px;
text-decoration: none;
color: white;

&:hover{
    color: #ADF1D2;
}
`
const ContentDiv = styled.div`
display: flex;
justify-content: flex-start;
`

const UserDiv = styled.div`
display: flex;
justify-content: flex-end;
margin-left: 60%;
`

const BoxSpan = styled.span`
border: 1px solid white;
padding: 10px;

&:hover{
    border: 1px solid #ADF1D2;
}
`

const Nav = () => {
    return (
        <div>
            <NavBox>
                <H1Style>How-To</H1Style>
                <ContentDiv>
                    <NavLink>Newsfeed</NavLink>
                    <NavLink to="/add-how-to">Create Content</NavLink>
                </ContentDiv>
                <UserDiv>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signUp"><BoxSpan>Sign Up</BoxSpan></NavLink>
                </UserDiv>


            </NavBox>
        </div>
    )
}

export default Nav;