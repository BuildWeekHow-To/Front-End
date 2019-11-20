import React, { useEffect, useState } from 'react'
import Styled from 'styled-components';
import { axiosWithoutAuth } from './utils/axiosWithAuth';

const CardsContainer = Styled.div`
display: flex;
flex-wrap: wrap;
`

const IndividualCards = Styled.div`
border: 1px solid black;
border-radius: 1rem;
width: 25%;
margin: 1rem;
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
                        <h2> {item.name} </h2>
                        <p> {item.desc} </p>

                    </IndividualCards>
                ))}
            </CardsContainer>
        )
    }

}