import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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

const Entire = Styled(Form)`

background-color: #755B69;
display: flex;
box-shadow: black 3px 5px;
flex-direction: column;
width: 70%;
height: 40vh;
margin-left: 15%
margin-top: 15%
padding-top: 5%
position: fixed;




`

const LoginField = Styled(Field)`
background-color: #755B69;
border: .1px dotted white;
color: white;
font-weight: bold;
font-size: 15px;
width: 45%;
margin-left: 25%;
margin-top: 2%;
height: 5vh;
text-align: center;


`

const LogInto = Styled.button`

width: 35%;
margin-left: 30%;
margin-right: 50%;
height: 5vh;
margin-top: 2%;
color: black;
font-weight: bold;
font-size: 15px;
background-color: #ADF1D2;

:hover{
    background-color: #96C5B0;
    box-shadow: black 5px 5px;
}


`



const LogIn = ({ values, errors, touched, status }) => {
    const [LogForm, setLogForm] = useState([]);


    useEffect(() => {
        status && setLogForm(LogForm =>
            [...LogForm, status]);
    }, [status]);
    return (
        <div className="FormField">
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
            </Icons>
            <Entire>
                <LoginField
                    type='text'
                    name='UserName'
                    placeholder='Username'
                />
                {touched.UserName && errors.UserName && (
                    <p className="errors">{errors.UserName}</p>
                )}

                <LoginField
                    type='password'
                    name='Password'
                    placeholder='Password'
                />

                {touched.Password && errors.Password &&
                    (<p className='errors'> {errors.Password}</p>
                    )}

                <LogInto type="submit"> Log In! </LogInto>
            </Entire>
        </div>
    )


}

const LogInForms = withFormik({
    mapPropsToValues({ UserName, Password }) {
        return {
            UserName: UserName || "",
            Password: Password || "",

        };
    },
    validationSchema: Yup.object().shape({
        UserName: Yup.string().required(),
        Password: Yup.string().required()
    }),
    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);

            })
            .catch(err => console.log(err.response));
    }
})(LogIn);

export default LogInForms