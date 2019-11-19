import React from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth';


export class AddHowTo extends React.Component{
    state = {
        addNewHowTo:{
            title:'',
            content:'',
            id: Date.now()
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
        axiosWithAuth()
        .post('howtos', this.state.addNewHowTo)
        .then(res => {
            window.location = '/howto-dashboard'
        })
    }

    render(){
        return(
            <div>
                <h2>Add How-To</h2>
                <form>
                    <input 
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.state.addNewHowTo.title}
                        onChange={this.handleChange}
                    />
                    <textarea
                        type="text"
                        name="content"
                        placeholder="content"
                        value={this.state.addNewHowTo.content}
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