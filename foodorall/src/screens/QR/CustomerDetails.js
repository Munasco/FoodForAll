import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, StyleSheet, View, ScrollView, TextInput, Linking,
Button, Alert, Switch, TouchableOpacity, Modal, ActivityIndicator } from 'react-native'
import tailwind from 'tailwind-rn';
//import Modal from 'react-native-modal';
import PhoneIcon from 'react-native-vector-icons/FontAwesome'
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import NotificationsIcon from 'react-native-vector-icons/MaterialIcons'
import {Buttons} from 'components/Buttons'
import Icon from 'react-native-vector-icons/AntDesign'
import { Ionicons } from '@expo/vector-icons'; 
// import {
//     newPaymentRequest,
//     setAddError,
//     setAddSuccess,
//     selectAddSuccess,
//     selectAddError,
//     selectCustomer,
//     setCustomer,
//     fetchCustomer,
//     fetchCustomers
// } from 'state/customers/customerSlice'

// import {
//     selectUserData
// } from 'state/users/userSlice'

// import {
//     fetchCustomersData, fetchCustomerData
// } from 'routes/customerRoutes';

// import {
// REACT_APP_WEB_APP_URL } from 'variables';
// import moment from 'moment';

// import {    
//     createNewPaymentRequest,        
//     fetchTransactionss
// } from 'routes/transactionRoutes';


// import { Get, Post } from 'utils/fetchUtils';



export const CustomerDetails = ({ route,  navigation }) => { 
     
    
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
      padding: 24,
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