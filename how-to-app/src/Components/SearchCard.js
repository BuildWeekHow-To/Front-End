import React from 'react';
import styled from 'styled-components';
const IndividualCard = styled.div`
background-color: #BF77BF;
    border-radius: .8rem;
    width: 30%;
    height: 55vh;
    margin: 1rem;
    color: #070707;
    cursor: pointer;
    text-transform: capitalize;
    opacity: .8;
    :hover{
        transform: scale(1.1);
        color: white;
        opacity: 1;
`
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
export default function SearchCard(props) {
    return (
        <CardContainer>
            <IndividualCard>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </IndividualCard>
        </CardContainer>
    )
}

