/***
 * 
 * DEPRECIATED, WILL NOT BE USING ANYMORE
 * 
 */

import React, { useState, useEffect } from 'react'
import JWT from 'expo-jwt';

import { AsyncStorage } from 'react-native';
import { JWT_SECRET } from 'variables.js';


/**OPTIMIZE THIS FUNCTION */
export const  useToken = (user) => {     
    let newToken = JWT.encode({ foo: 'bar' }, JWT_SECRET);      
    let token = newToken;
    //const[token, setToken] = useState(null);    
    useEffect(() => {      
      /*async function handleToken(tok){     
        console.log("Setting new token")
        AsyncStorage.setItem('token', tok)        
      } */      
      /*AsyncStorage.getItem('token').then((mTok)=> {
        if(mTok === null && user !== null){                      
            console.log(newToken)
            handleToken(newToken)   
            setToken(newToken)             
          }    
          else{
            setToken(mTok)
          }
      }).catch(err => console.error(err)) */
      return
    });        
    return { token }
  }