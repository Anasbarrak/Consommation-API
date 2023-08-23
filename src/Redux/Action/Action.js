import { GET } from "../Actiontype/Actiontype"
import axios from 'axios'
export const Get=()=>{
    try {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res))
        dispatch({
            type: GET,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}