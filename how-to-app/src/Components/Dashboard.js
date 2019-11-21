import React, {useEffect,useState} from 'react'
import Styled from 'styled-components';
import axios from "axios";
import {axiosWithoutAuth} from './utils/axiosWithAuth';

const CardsContainer = Styled.div`
display: flex;
flex-wrap: wrap;
`

const IndividualCards= Styled.div`
border: 1px solid black;
border-radius: 1rem;
width: 25%;
margin: 1rem;
`

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            howtos:[]
        }
    }

    getData=()=>{
            axiosWithoutAuth()
            .get('howtos')
            .then(res => {
                console.log(res.data)
                this.setState({howtos: res.data})
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getData();
    }

    deleteCard = (id) => {
        axiosWithoutAuth()
            .delete(`https://build-week-how-to.herokuapp.com/api/howtos/${id}`)
            .then(res => {
                console.log(res);
                this.getData();
            })           
            .catch(err => console.log(err.response));
    }

    render(){
        console.log('This is State', this.state)
        console.log(this.state.howtos.length)
        const howtos = this.state.howtos;
        return(
            <CardsContainer className='CardsContainer' >
                {howtos.map(item => (
                    <IndividualCards key={item.id} className='IndividualCards' >
                        <h2> {item.name} </h2>
                        <p> {item.desc} </p>
                        <button onClick={()=> {this.props.history.push(`/update-howtos/${item.id}`)}} >
                            Edit
                        </button>
                        <button  onClick={()=>this.deleteCard(item.id)}>
                            Delete
                        </button>
                    </IndividualCards>
                ))}
            </CardsContainer>
        )
    }

}