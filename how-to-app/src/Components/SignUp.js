import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import styled from 'styled-components'

const Div1 = styled.div`
width: 25%;
display: inline-block;
margin: 2%;
padding-bottom: 1%;
`

const SignUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LabelDiv = styled.div`
    margin: 1%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 350px;
    
`;

const FieldInfo = styled(Field)`
border-radius: 5px;
border: 1px solid gray;
width: 200px;
padding: 10px;
`;

const FieldSelect = styled(Field)`
width: 225px;
border-radius: 5px;
border: 1px solid gray;
padding: 10px;
`;

const Label = styled.label`
margin-right: 20px;
display: flex;
width: 100px;
`;

const SignUpButton = styled.button`
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: #553555;
padding: 15px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
margin: 20px;
width: 25%;
`
const GetStarted = styled.h2`
color: #553555;
`
const Desc = styled.p`
color: #706f6c;
width: 345px;
margin-top: -3%;
text-align: left;
`
const PDiv = styled.p`
display: flex;
justify-content: center;
`
const SignUp = ({ values, touched, errors, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <Div1>
            <GetStarted>Get started with a free account</GetStarted>
            <PDiv>
                <Desc>Create an account to start hacking your life by discovering and sharing the best life hacks on the internet.</Desc>
            </PDiv>
            <Form>
                <SignUpDiv>

                    <LabelDiv>
                        <Label>Username</Label>
                        <FieldInfo type="text" name="username" />
                        {touched.username && errors.username && (<p>{errors.username}</p>)}

                    </LabelDiv>

                    <LabelDiv>
                        <Label>Password</Label>
                        <FieldInfo type="password" name="password" />
                        {touched.email && errors.email && (<p>{errors.email}</p>)}
                    </LabelDiv>

                    <LabelDiv>
                        <Label>Email</Label>
                        <FieldInfo type="email" name="email" />
                        {touched.password && errors.password && (<p>{errors.password}</p>)}


                    </LabelDiv>

                    <LabelDiv>
                        <Label>Account Type</Label>
                        <FieldSelect required as="select" name="userType">
                            <option value="user">User</option>
                            <option value="contentcreator">Content Creator</option>
                        </FieldSelect>
                    </LabelDiv>
                    <LabelDiv>
                        <SignUpButton>Submit</SignUpButton>
                    </LabelDiv>





                </SignUpDiv>
            </Form>
        </Div1>
    )
}

const FormikSignUp = withFormik({
    mapPropsToValues({ username, password, email }) {
        return {
            username: username || "",
            password: password || "",
            email: email || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
        email: Yup.string().required()

    }),

    handleSubmit(values, { setStatus }) {
        Axios.post("https://build-week-how-to.herokuapp.com//api/auth/register", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.response));
    }
})(SignUp);

export default FormikSignUp
