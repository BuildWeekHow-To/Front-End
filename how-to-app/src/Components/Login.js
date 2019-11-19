import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';



const LogIn = ({ values, errors, touched, status }, props) => {
    const [LogForm, setLogForm] = useState([]);


    useEffect(() => {
        status && setLogForm(LogForm =>
            [...LogForm, status]);
    }, [status]);
    return (
        <div className="FormField">
            <Form>
                <Field
                    type='text'
                    name='username'
                    placeholder='username'
                />
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}

                <Field
                    type='password'
                    name='password'
                    placeholder='password'
                />

                {touched.password && errors.password &&
                    (<p className='errors'> {errors.password}</p>
                    )}

                <button type="submit"> Log In! </button>
            </Form>
        </div>
    )


}

const LogInForms = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",

        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),
    
    handleSubmit(values, {props, setStatus }) {
        axios
            .post("https://build-week-how-to.herokuapp.com/api/auth/login", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
                localStorage.setItem("token", res.data.token);
                props.history.push('/add-how-to')
            })
            .catch(err => console.log(err.response));
    }
})(LogIn);

export default LogInForms