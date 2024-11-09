import { APIURL } from "../Utils/constants"
import axios from 'axios'

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${APIURL}/auth/register`, { 
            nombre, 
            email, 
            password, 
        });
        return response.data;
    } catch (error) {
       return alert(error.response.data.errors[0].msg)
        
    }
}


export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${APIURL}/auth/login`, {
            email, 
            password, 
        });
        return response.data;
    } catch (error) {
       return alert(error.response.data.msg);
       
       
        
    }

}




