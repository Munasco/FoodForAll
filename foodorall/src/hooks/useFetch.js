/***
 * DEPRECIATED, WILL NOT BE USING ANYMORE
 * 
 */


import React, { useState, useEffect } from 'react';
import { useToken } from 'hooks/useToken';
import axios from 'axios';
import useFirebase from 'hooks/useFirebase';
import { selectUserData } from 'state/users/userSlice';
import { useSelector, useDispatch } from 'react-redux';


export const  useFetch = () => {      
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)    
    const[data, setData] = useState(null)     
    const { token }  = useToken(userData);
    const userData = useSelector(selectUserData)

    async function get(url){        
    setLoading(true)          
    let config = {
        headers: { auth: `${token}` }
    };
    let result = await axios.get(url, config)
    .then(res => {
        console.log("Token here is", token)
        console.log("Here are the transactions", res.data)
        setData(res)  
        setLoading(false)    
        return res.data
    })
    .catch((err) =>
    {   
        console.log("Error when fetching transactions")
        console.log(err)
        setError(err)
        setLoading(false)        
        return err              
    })        
        return result
    }

    async function post(url,body){           
        setLoading(true)          
        let config = {
            headers: { auth: `${token}` }
        };
        let result = await axios.post(url, body, config)
        .then(res => {
            console.log(res)
            setData(res)  
            setLoading(false)    
            return res.data   
        })
        .catch((err) => 
        {
            //console.log(err)
            setError(err)
            setLoading(false)     
            if(err.response){
                return err.response
            }
            return err
        })     
        return result   
    }        
    return {loading, error, data, get, post}    
  }
