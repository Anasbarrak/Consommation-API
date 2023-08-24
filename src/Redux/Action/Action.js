import { GET } from "../Actiontype/Actiontype"
import axios from 'axios'
export const Get=()=>async (dispatch)=>{
    try {
       const res= await axios.get("https://www.harmonystore01.com/api/get_All_product")
        dispatch({
            type: GET,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
    
}
/*Création Action poste*/
export const Post=(product)=>async (dispatch)=>{
    try {
        const res= await axios.post("https://www.harmonystore01.com/api/Create_product", product)
        dispatch(Get())
    } catch (error) {
        console.log(error)
    }
}
/*Création Action Delete*/
export const Delete=(id)=>async (dispatch)=>{
    try {
        const res= await axios.delete("https://www.harmonystore01.com/api/delete/product/" + id)
        dispatch(Get())
    } catch (error) {
        console.log(error)
    }
}