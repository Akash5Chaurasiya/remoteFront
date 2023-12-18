import axios from "axios"
import { getAllDevsApiPath, getAllSkills, loginApiPath, onBoradApiPath, signupApiPath } from "../ApiRoutes/AllRoutes"

export const signup=async(details:any)=>{
    try {
        const {data}=await axios.post(`${signupApiPath}`,details,{
            withCredentials: true,
        })
        return data
    } catch (error) {
        throw error 
    }
}

export const login=async(details:any)=>{
    try {
        const {data}=await axios.post(`${loginApiPath}`,details,{
            withCredentials: true,
        })
        return data
    } catch (error) {
        throw error 
    }
}

export const skills=async()=>{
    try {
        const {data}=await axios.get(`${getAllSkills}`,{
            withCredentials: true,
        })
        return data
    } catch (error) {
        throw error 
    }
}

export const onBoard=async(detail:any)=>{
    try {
        const {data}=await axios.post(`${onBoradApiPath}`,detail,{
            withCredentials: true,
        })
        return data
    } catch (error) {
        throw error 
    }
}

export const getAllDevs=async()=>{
    try {
        const {data}=await axios.get(`${getAllDevsApiPath}`,{
            withCredentials: true,
        })
        return data
    } catch (error) {
        throw error 
    }
}