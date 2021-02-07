import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from 'config/FirebaseConfig';
import tailwind from 'tailwind-rn';
import axios from 'axios'
import * as yup from 'yup'
// import { updateUserInformation } from 'routes/userRoutes';
// import  { Post } from 'utils/fetchUtils';
// import {
//   selectUserData
// } from 'state/users/userSlice'

import { Buttons } from 'components/Buttons';

import { useSelector } from 'react-redux';

export const Profile = ({ route,  navigation: { goBack }  }) => {

 
    return (
      <View style={tailwind("flex-grow flex flex-col items-center p-12 justify-center")} >  
        
      </View>
    );
}
