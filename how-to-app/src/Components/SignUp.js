import React, { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const SignUp = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status])

    return (
        <div className= signUpForm>
            <h2>Sign Up</h2>
            <Form>
                <label>First Name
                    <Field type="text" name="firstName" />
                </label>
                <label>Last Name
                    <Field type="text" name="lastName" />
                </label>
                <label>Username
                    <Field type="text" name="username" />
                </label>
                <label>Password
                    <Field type="password" name="password" />
                </label>
                <label>Email
                    <Field type="email" name="email" />
                </label>
                <label>Account Type
                    <Field required as="select name=" role>
                        <option value="user">User</option>
                        <option value="contentcreator">Content Creator</option>
                    </Field>
                    <label>Terms of Service
            <Field required type="checkbox" name="tos" checked={values.tos} />
                    </label>
                    <button>Submit</button>
                </label>
            </Form>
        </div>
    )
}