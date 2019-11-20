import React from 'react';
import styled from 'styled-components';

const IndividualCard = styled.div`
border: 1px solid black;
border-radius: 1rem;
width: 25%;
margin: 1rem;
`
const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;

`

export default function HowToCard(props) {
    return (
        <CardContainer>
            <IndividualCard>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </IndividualCard>
        </CardContainer>


    )
}