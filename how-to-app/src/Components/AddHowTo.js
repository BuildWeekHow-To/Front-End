import React from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Styled from 'styled-components';

const Icons = Styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-around;

`

const Yellow = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: #96C5B0;
    transform: scale(1.5) rotate(30deg);
   
}

`
const Blue = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: 	#FF00FF;
    transform: scale(1.5) rotate(30deg);
   
}

`
const Violet = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: 	#9400D3;
    transform: scale(1.5) rotate(30deg);
   
}

`


const Pink = Styled.div`
color: black;
font-size: 70px;


:hover{
    color: #FF1493;
    transform: scale(1.5) rotate(-30deg);

    
   
}

`

const Red = Styled.div`
color: black;
font-size: 70px;

:hover{
    color: 	#B22222;
    transform: scale(1.5) rotate(-30deg);

    
   
}

`

const Howto = Styled.div`
background-color: #755B69;
box-shadow: black 3px 5px;
height: 60vh;
width: 70%;
margin-left: 15%;


`
const MainTitle = Styled.h2`
font-family: ComicSansMs;
font-size: 50px;

`
const ContentTitle = Styled.input`

width: 50%;
height: 5vh;
display:block;
margin-left: 25%;
margin-top: 5%;
font-size: 15px;
text-align: center;
font-weight: bold;



`
const Content = Styled.textarea`
width: 50%;
height: 5vh;
display:block;
margin-left: 25%;
margin-top: 5%;
font-size: 15px;
text-align: center;
font-weight: bold;

`
const ButtonStyle = Styled.button`
width: 15%;
height: 5vh;
margin-top: 5%;
text-align: center;
font-weight: bold;
background-color: #ADF1D2;

:hover{
    background-color: #96C5B0;
    box-shadow: black 5px 5px;
}
`


export class AddHowTo extends React.Component {
    state = {
        addNewHowTo: {
            title: '',
            content: '',
            id: Date.now()
        }
    };

    handleChange = e => {
        this.setState({
            addNewHowTo: {
                ...this.state.addNewHowTo,
                [e.target.name]: e.target.value
            }
        });
    };

    postNewHowTo = () => {
        axiosWithAuth()
            .post('howtos', this.state.addNewHowTo)
            .then(res => {
                window.location = '/howto-dashboard'
            })
    }

    render() {
        return (
            <div>
                <link rel={"stylesheet"} href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"} />
                <Icons>
                    <Yellow>
                        <i class="fa fa-car"></i>
                    </Yellow>
                    <Pink>
                        <i class="fa fa-bicycle"></i>
                    </Pink>

                    <Red>
                        <i class="fa fa-camera"></i>
                    </Red>

                    <Blue>
                        <i class="fa fa-coffee"></i>
                    </Blue>

                    <Violet>
                        <i class="fa fa-glass"></i>
                    </Violet>

                    <Violet>
                        <i class="fa fa-globe"></i>
                    </Violet>

                </Icons>
                <Howto>
                    <MainTitle>Add How-To</MainTitle>
                    <form>
                        <ContentTitle
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={this.state.addNewHowTo.title}
                            onChange={this.handleChange}
                        />
                        <Content
                            type="text"
                            name="content"
                            placeholder="Content"
                            value={this.state.addNewHowTo.content}
                            onChange={this.handleChange}
                        />


                        <ButtonStyle type="submit" onClick={this.postNewHowTo}>
                            Publish
                    </ButtonStyle>
                    </form>
                </Howto>
            </div>
        )
    }
}