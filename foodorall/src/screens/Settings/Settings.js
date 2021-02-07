import React, { useState, useEffect } from 'react';
import {SafeAreaView,ScrollView, View, TouchableOpacity, Text, Switch, Button,Alert,
StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import {Dimensions, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import {Feather} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';
import firebase from 'config/FirebaseConfig';
import useFirebase from 'hooks/useFirebase'

export const Settings = () => {

    const [emailIsEnabled, setEmailIsEnabled] = useState(false);
    const {logout,user}  = useFirebase();
    const toggleEmailSwitch = () => setEmailIsEnabled(previousState => !previousState);
    const [SMSIsEnabled, setSMSIsEnabled] = useState(false);
    const toggleSMSSwitch = () => setSMSIsEnabled(previousState => !previousState);

    const resetPassword = ()=> {
        var auth = firebase.auth();
        var emailAddress = user.email;
        auth.sendPasswordResetEmail(emailAddress).then(function() {
          // Email sent.
          Alert.alert("Password Reset Email has been sent. Check your Email")
        }).catch(function(error) {
          // An error happened.
          Alert.alert("Error your email doesn't exist")
          console.log(error)
        });
    
      }

    const navigation = useNavigation();
    return (
    <ScrollView contentContainerStyle={tailwind("bg-white flex items-center py-4 flex-grow")}>
      <View style={tailwind("border-b w-64 border-gray-300")}>
        <View style={tailwind("py-2")}>
            <Text style={tailwind("text-gray-500 uppercase")}>Account</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <View style={tailwind("flex flex-row py-2 justify-between")}>
                <Text>Edit Profile</Text>
                <Icon name="right" size={20}></Icon>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetPassword}>
            <View style={tailwind("flex flex-row py-2 justify-between")}>
                <Text>Change Password</Text>
            </View>
        </TouchableOpacity>
      </View>

      <View style={tailwind("border-b w-64 border-gray-300")}>
        <View style={tailwind("py-2")}>
            <Text style={tailwind("text-gray-500 uppercase")}>Privacy</Text>
        </View>  
        <TouchableOpacity onPress={()=>navigation.navigate("Terms and Conditions")}>
            <View style={tailwind("flex flex-row py-2 justify-between")}>
                <Text>Terms and Conditions</Text>
                <Icon name="right" size={20}></Icon>
            </View>
        </TouchableOpacity>
      </View>
      <View style={tailwind("w-64 flex flex-row justify-start")}>
        <Button title="Logout" color="#FE7878" onPress={logout} />
      </View>
     </ScrollView>
  );
}
