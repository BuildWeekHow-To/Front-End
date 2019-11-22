import React from 'react';
import Styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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

export const HowToCard = props => {
    // console.log(props)
    return (
        <div>
            {props.howtos.map(item => (
                <IndividualCards key={item.id} className='IndividualCards' >
                    <h2> {item.name} </h2>
                    <p> {item.desc} </p>

                    {/* <Link to={`/update-howtos/${item.id}`}>
                        Edit
                    </Link> */}

                    <button onClick={(e)=> {
                        e.preventDefault();
                        console.log('Button CLicked'); 
                        props.history.push(`/update-howtos/${item.id}`); 

                    }} >
                        Edit
                    </button>


                    <button onClick={() => props.deleteCard(item.id)}>
                        Delete
                    </button>

                </IndividualCards>
            ))}

        </div>
    )
}

{/* <button onClick={()=> {props.history.push(`/update-howtos/${item.id}`)}} >
                            Edit
                        </button> */}

                        // window.location.reload();
