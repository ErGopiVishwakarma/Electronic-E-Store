import axios from 'axios'
import { AdminProfile, AllProductData, UserProfile } from './actionType'

export const getUser =()=>(dispatch)=>{
    axios('https://real-lime-bandicoot-robe.cyclic.app/user')
    .then(res=>dispatch({type:UserProfile,payload:res.data}))
} 

export const getAdmin =()=>(dispatch)=>{
    axios('https://real-lime-bandicoot-robe.cyclic.app/admin')
    .then(res=>dispatch({type:AdminProfile,payload:res.data}))
} 

export const getAllData =()=>(dispatch)=>{
    axios('https://real-lime-bandicoot-robe.cyclic.app/products')
    .then(res=>dispatch({type:AllProductData,payload:res.data}))
} 

export const editProducts =(id,data) =>(dispatch) =>{
    return axios.patch(`https://real-lime-bandicoot-robe.cyclic.app/products/${id}`,data)
    .then(res=>'')
}