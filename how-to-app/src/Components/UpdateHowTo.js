import React, {useState, useEffect} from "react";
import {axiosWithAuth, axiosWithoutAuth} from './utils/axiosWithAuth';

const initial = {
    name:'',
    desc:'',
    user_id:''
}

export const UpdateHowTo = props => {
    const [updateForm, setUpdateForm] = useState(initial);

    useEffect(()=>{
        console.log(props.match.params.id)
        axiosWithoutAuth()
            .get(`howtos/${props.match.params.id}`)
            .then(res => {
                console.log(res.data);
                setUpdateForm(res.data)})
            .catch(err => console.log('this is useEffect error',err))
    },[])


const handleSubmit = event => {
    event.preventDefault();
    axiosWithoutAuth()
        .put(`howtos/${props.match.params.id}`, updateForm)
        .then(()=>{
            console.log(updateForm.id);
            props.history.push(`/dashboard`)
        })
        .catch(err => console.log('this is handleSubmit error',err))
}

const handleChange=event=>{
    setUpdateForm({...updateForm, [event.target.name]: event.target.value})
}

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="name"
                    placeholder="title"
                    value={updateForm.name}
                    onChange={handleChange}
                />
                <textarea
                    type="text"
                    name="desc"
                    placeholder="content"
                    value={updateForm.desc}
                    onChange={handleChange}
                />


                <button type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}