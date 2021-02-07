
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from 'config/FirebaseConfig';
import tailwind from 'tailwind-rn';
import axios from 'axios'
import * as yup from 'yup'

import { Entypo } from '@expo/vector-icons'; 
import {Buttons} from 'components/Buttons'
import useFirebase from 'hooks/useFirebase'


export default function SignUpScreen(props) {

  const { logout } = useFirebase();
  const [state, setState] = React.useState({
      displayName: '',
      email: '', 
      password: '',
      isLoading: false,
      first_name: '',
      last_name: ''
  })
  const[loading, setLoading] = useState(false)
    
  const [errors, setErrors] = React.useState('')

    const schema = yup.object().shape({
      first_name: yup.string("Invalid Name has non-letters").required(),
      last_name:  yup.string().required(),
      email: yup.string().email("Invalid Email").required(),
    });

    const updateInputVal = (val, prop) => {
      setState({...state, [prop]: val.trim()});
    }
  
  const registerUser = () => {   
    
    setLoading(true)
    const { email, first_name, last_name} = state      
    const variables = {first_name, last_name, email}
    schema.isValid(variables)
      .then((valid)=>{        
          schema.validate(variables, {
            abortEarly: false
          }).
          then(valid=>console.log(valid))
          .then(_=>{

    if(state.email === '' && state.password === '') {
      Alert.alert('Enter details to signup!')
    }
    else {
      
      setState({
        ...state, 
        displayName: state.first_name  + " " + state.last_name,
      })      
      
      firebase
      .auth()
      .createUserWithEmailAndPassword(state.email,
       state.password.trim())
      .then(async (res) => {
        const user = firebase.auth().currentUser;
        console.log(res)
        let user_id = res.user.uid
        let email = res.user.email
        let body = {
          user_id: user_id,
          email: email,
          first_name: state.first_name,
          last_name: state.last_name
        }
        console.log(body)
        //let url = `${REACT_APP_API_URL}/createUser`        
      })
      .catch(error => {
        console.log(error)
        Alert.alert(JSON.stringify(error.message))
        setState({ ...state, errorMessage: error.message })
      })
      setLoading(false)
    }
      })
      .catch(
        (err)=> {
          console.log("\n\n")
          console.log(err.errors.join('\n'))
          setErrors(err.errors.join('\n'))
          let errorString = ''
          err.errors.forEach(err => {
            errorString += '\n' + err + '\n'
          })
          Alert.alert(`Invaid data: ${errorString}`)
        }
      )
      })

    setLoading(false)
    
  }

    if(loading){
      return(
        <View style={tailwind("inset-0 absolute items-center justify-center bg-white")}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    } 

    return (
      <View style={tailwind("flex-grow my-24 flex flex-col py-8 px-12 justify-center")} >  
        <TextInput
          style={tailwind("w-full mb-2 rounded-sm p-3 bg-gray-300 border-gray-400 border-b")}
          placeholder="First Name"
          value={state.first_name}
          onChangeText={(val) => updateInputVal(val, 'first_name')}
        />    
          <TextInput
          style={tailwind("w-full mb-2 rounded-sm p-3 bg-gray-300 border-gray-400 border-b")}
          placeholder="Last Name"
          value={state.last_name}
          onChangeText={(val) => updateInputVal(val, 'last_name')}
        />       
        <TextInput
          style={tailwind("w-full mb-2 rounded-sm p-3 bg-gray-300 border-gray-400 border-b")}
          placeholder="Email"
          value={state.email}
          onChangeText={(val) => updateInputVal(val, 'email')}
        />
        <TextInput
          style={tailwind("w-full mb-2 rounded-sm p-3 bg-gray-300 border-gray-400 border")}
          placeholder="Password"
          value={state.password}
          onChangeText={(val) => updateInputVal(val, 'password')}
          maxLength={15}
          on
          secureTextEntry={true}
        />   
       <Buttons onPress={registerUser} title={'Sign Up'}/>

        
        <View style={tailwind("flex-grow mt-4 flex flex-row items-end")}>
          <Text> Already Registered? </Text>
          <Text 
            style={tailwind("text-center text-orange-400")}
            onPress={() => props.navigation.navigate('Sign In')}>
            Click here to login
          </Text>
        </View>                          
      </View>
    );
}
