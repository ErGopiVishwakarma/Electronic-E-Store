
import axios from 'axios'
import { AdminProfile, AllProductData, GetDataFromBlackList, UserProfile } from './actionType'

export const getUser =()=>(dispatch)=>{
    axios('https://viridian-confusion-henley.glitch.me/user')
    .then(res=>dispatch({type:UserProfile,payload:res.data}))
} 

export const getAdmin =()=>(dispatch)=>{
    axios('https://viridian-confusion-henley.glitch.me/admin')
    .then(res=>dispatch({type:AdminProfile,payload:res.data}))
} 

export const getAllData =()=>(dispatch)=>{
    axios('https://viridian-confusion-henley.glitch.me/products')
    .then(res=>dispatch({type:AllProductData,payload:res.data}))
} 

export const editProducts =(id,data) =>async() =>{
    let res = await axios.patch(`https://viridian-confusion-henley.glitch.me/products/${id}`,data)
    return res
}

export const deleteProduct =(id)=>async()=>{
    let res = await axios.delete(`https://viridian-confusion-henley.glitch.me/products/${id}`)
    return res
}

export const addProduct =(data)=>async()=>{
    let res = await axios.post(`https://viridian-confusion-henley.glitch.me/products`,data)
    return res
}

//for blacklisted user

export const postUserToBlacklist =(data)=>async()=>{
    let res = await axios.post(`https://viridian-confusion-henley.glitch.me/blacklist`,data)
    return res
}

export const deleteUserFromBlacklist =(id)=>async()=>{
    let res = await axios.delete(`https://viridian-confusion-henley.glitch.me/blacklist/${id}`)
    return res
}

export const getAllDataFromBlacklist =()=>(dispatch)=>{
    axios('https://viridian-confusion-henley.glitch.me/blacklist')
    .then(res=>dispatch({type:GetDataFromBlackList,payload:res.data}))
}