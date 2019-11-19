import React , { useState, useEffect } from "react"
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = ({ values, touched, errors, status }) => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      status && setUsers(users => [...users, status]);
    }, [status]);
   

    return (
        <div>
            <h2>Sign Up</h2>
            <Form>
                <label>Username
                    <Field type="text" name="username" />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}
                </label>
                <label>Password
                    <Field type="password" name="password" />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </label>
                <label>Email
                    <Field type="email" name="email" />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                </label>
                <label>Account Type
                    <Field type="usertype" name="usertype" placeholder="User or Content Creator"/>
                    {touched.usertype && errors.usertype && (<p>{errors.usertype}</p>)}
                </label>
                <button type="submit">Submit</button>                
            </Form>
        </div>
    )
}

const FormikSignUp = withFormik({mapPropsToValues({ username, password, email, usertype}) {
        return {
            username: username || "",
            password: password || "",
            email: email || "",
            usertype: usertype || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required(),
        email: Yup.string().required(),
        usertype: Yup.string().required()
    }),

    handleSubmit(values, {props, setStatus}) {
        axios
        .post("https://build-week-how-to.herokuapp.com/api/auth/register", values)
            .then(res => {
                setStatus(res.data);
                console.log(res.status);
                props.history.push('/login')
            })
            .catch(err => console.log(err.res));
    }
})(SignUp);

export default FormikSignUp


//For Ola's Use
{/* <label>Account Type
    <Field type="usertype" name="usertype" placeholder="User or Content Creator"/>
    {touched.usertype && errors.usertype && (<p>{errors.usertype}</p>)}
</label>
<button>Submit</button> */}

//Old code block for Account type
{/* <label>Account Type
    <Field required as="select" name="userType">
        <option value="user">User</option>
        <option value="contentcreator">Content Creator</option>
    </Field>
    <button>Submit</button>
</label> */}
