import axios from 'axios'
import { AdminProfile, AllProductData, GetDataFromBlackList, UserProfile } from './actionType'

export const getUser =()=>(dispatch)=>{
    axios('http://localhost:8080/user')
    .then(res=>dispatch({type:UserProfile,payload:res.data}))
} 

export const getAdmin =()=>(dispatch)=>{
    axios('http://localhost:8080/admin')
    .then(res=>dispatch({type:AdminProfile,payload:res.data}))
} 

export const getAllData =()=>(dispatch)=>{
    axios('http://localhost:8080/products')
    .then(res=>dispatch({type:AllProductData,payload:res.data}))
} 

export const editProducts =(id,data) =>async() =>{
    let res = await axios.patch(`http://localhost:8080/products/${id}`,data)
    return res
}

export const deleteProduct =(id)=>async()=>{
    let res = await axios.delete(`http://localhost:8080/products/${id}`)
    return res
}

export const addProduct =(data)=>async()=>{
    let res = await axios.post(`http://localhost:8080/products`,data)
    return res
}

//for blacklisted user

export const postUserToBlacklist =(data)=>async()=>{
    let res = await axios.post(`http://localhost:8080/blacklist`,data)
    return res
}

export const deleteUserFromBlacklist =(id)=>async()=>{
    let res = await axios.delete(`http://localhost:8080/blacklist/${id}`)
    return res
}

export const getAllDataFromBlacklist =()=>(dispatch)=>{
    axios('http://localhost:8080/blacklist')
    .then(res=>dispatch({type:GetDataFromBlackList,payload:res.data}))
}