import React from "react"
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const SignUp = ({ values }) => {

    return (
        <div>
            <h2>Sign Up</h2>
            <Form>
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
                    <Field required as="select" name="userType">
                        <option value="user">User</option>
                        <option value="contentcreator">Content Creator</option>
                    </Field>
                    <button>Submit</button>
                </label>
            </Form>
        </div>
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
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
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
