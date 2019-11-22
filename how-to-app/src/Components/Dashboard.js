import React, { useEffect, useState } from 'react'
import Styled from 'styled-components';
import { axiosWithoutAuth } from './utils/axiosWithAuth';

const CardsContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const IndividualCards = Styled.div`
    background-color: #bf77bf; 
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
    }
`

const H2 = Styled.h2`
    border-bottom: 2px solid white;
    padding-bottom: 5px;
`

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            howtos: []
        }
    }

    getData = () => {
        axiosWithoutAuth()
            .get('howtos')
            .then(res => {
                console.log(res.data)
                this.setState({ howtos: res.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const howtos = this.state.howtos;
        return (
            <CardsContainer className='CardsContainer' >
                {howtos.map(item => (
                    <IndividualCards key={item.id} className='IndividualCards' >
                        <H2> {item.name} </H2>
                        <p> {item.desc} </p>

                    </IndividualCards>
                ))}
            </CardsContainer>
        )
    }

}