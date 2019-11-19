import React, {useEffect,useState} from 'react'
import {axiosWithoutAuth} from './utils/axiosWithAuth';

export default class Dashboard extends React.Component{
    constructor(){
        super();
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

    render(){
        const howtos = this.state.howtos;
        return(
            <div className='CardsContainer' >
                {howtos.map(item => (
                    <div key={item.id} className='IndividualCards' >
                        <h2> {item.name} </h2>
                        <p> {item.desc} </p>

                    </div>
                ))}
            </div>
        )
    }

}