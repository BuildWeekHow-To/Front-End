import axios from "axios";


const token = localStorage.getItem('token');

export const axiosWithAuth = () => {    

    return axios.create({
        baseURL: 'https://build-week-how-to.herokuapp.com/api/auth',
        headers:{
            Authorization: token
        }
    });
};
