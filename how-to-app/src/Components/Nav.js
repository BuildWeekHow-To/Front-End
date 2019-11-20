import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import SearchForm from "./SearchForm";


const H1Style = styled.h1`
width: 20%;
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

const BoxSpan = styled.span`
border: 1px solid white;
padding: 10px;

&:hover{
    border: 1px solid #ADF1D2;
}
`
const NavDiv = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
`

const Nav = () => {
    return (
        <div>
            <NavBox>
                <H1Style>How-To</H1Style>
                <SearchForm />
                <NavDiv>
                    <NavLink to="/dashboard">Newsfeed</NavLink>
                    <NavLink to="/add-how-to">Create Content</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signUp"><BoxSpan>Sign Up</BoxSpan></NavLink>
                </NavDiv>
            </NavBox>
        </div>
    )
}

export default Nav;