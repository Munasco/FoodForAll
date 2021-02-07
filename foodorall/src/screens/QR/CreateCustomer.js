import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert, KeyboardAvoidingView , ScrollView} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from 'hooks/useFirebase'
import tailwind from 'tailwind-rn'
// import {
//     REACT_APP_API_URL
// } from 'variables'
// import {
//     createCustomer,
//     selectAddSuccess,
//     selectAddError,
//     setAddSuccess,
//     fetchCustomers,
// } from 'state/customers/customerSlice'
// import { setAddError } from '../../state/customers/customerSlice';
// import * as yup from 'yup'
// import { newCustomer, fetchCustomersData } from 'routes/customerRoutes';
// import Dialog, { DialogContent } from 'react-native-popup-dialog';
// import MailChecker from 'mailchecker';
// import { Buttons } from 'components/Buttons';
// import { Post } from 'utils/fetchUtils';



export const CreateCustomer = ({ navigation: { goBack } }) => {
    
    
  return (
    <ScrollView style={tailwind('h-full bg-white')}>   
     </ScrollView>     
    );  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });