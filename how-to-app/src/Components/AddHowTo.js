import React from 'react';
import {axiosWithoutAuth} from './utils/axiosWithAuth';


export class AddHowTo extends React.Component{
    state = {
        addNewHowTo:{
            name:'',
            desc:'',
            user_id: Date.now()
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
        axiosWithoutAuth()
        .post('howtos', this.state.addNewHowTo)
        .then(res => {
            console.log(res)
        //  this.props.history.push('/dashboard')
            window.location="/dashboard"
        })
    }

    render(){
        return(
            <div>
                <h2>Add How-To</h2>
                <form>
                    <input 
                        type="text"
                        name="name"
                        placeholder="title"
                        value={this.state.addNewHowTo.name}
                        onChange={this.handleChange}
                    />
                    <textarea
                        type="text"
                        name="desc"
                        placeholder="content"
                        value={this.state.addNewHowTo.desc}
                        onChange={this.handleChange}
                    />
                   

                    <button type="submit" onClick={this.postNewHowTo}>
                        Publish
                    </button>
                </form>
            </div>
        )
    }
}