import React from 'react';
import Styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



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

                    <button onClick={(e) => {
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
