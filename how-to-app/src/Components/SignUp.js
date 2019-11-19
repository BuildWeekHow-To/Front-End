import React from "react"
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
`;

const LabelDiv = styled.div`
    margin: 1%;
`
const FieldInfo = styled(Field)`
border-radius: 5px;
border: 1px solid gray;
width: 200px;
padding: 10px;
`;

const EmailSpan = styled.span`
margin-right: 45px;
`
const UsernameSpan = styled.span`
margin-right: 15px;
`
const PasswordSpan = styled.span`
margin-right: 20px;
`
const AccountSpan = styled.span`
margin-right: 12px;
`
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

const SignUp = ({ values, touched, errors }) => {

    return (
        <Div1>
            <GetStarted>Get started with a free account</GetStarted>

            <Form>
                <SignUpDiv>
                    <LabelDiv>
                        <label><UsernameSpan>Username</UsernameSpan>
                            <FieldInfo type="text" name="username" />
                            {touched.username && errors.username && (<p>{errors.username}</p>)}
                        </label>
                    </LabelDiv>
                    <label><PasswordSpan>Password</PasswordSpan>
                        <FieldInfo type="password" name="password" />
                        {touched.email && errors.email && (<p>{errors.email}</p>)}
                    </label>
                    <LabelDiv>
                        <label><EmailSpan>Email</EmailSpan>
                            <FieldInfo type="email" name="email" />
                            {touched.password && errors.password && (<p>{errors.password}</p>)}
                        </label>

                    </LabelDiv>
                    <label><AccountSpan>Account Type</AccountSpan>
                        <FieldInfo required as="select" name="userType">
                            <option value="user">User</option>
                            <option value="contentcreator">Content Creator</option>
                        </FieldInfo>
                    </label>
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
