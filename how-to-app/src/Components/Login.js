import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';



const LogIn = ({ values, errors, touched, status }) => {
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
                    name='UserName'
                    placeholder='Username'
                />
                {touched.UserName && errors.UserName && (
                    <p className="errors">{errors.UserName}</p>
                )}

                <Field
                    type='password'
                    name='Password'
                    placeholder='Password'
                />

                {touched.Password && errors.Password &&
                    (<p className='errors'> {errors.Password}</p>
                    )}

                <button type="submit"> Log In! </button>
            </Form>
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