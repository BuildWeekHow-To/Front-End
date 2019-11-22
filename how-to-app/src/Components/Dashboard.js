import React, { useEffect, useState } from 'react'
import Styled from 'styled-components';
import { axiosWithoutAuth } from './utils/axiosWithAuth';


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