import React, { useState, useEffect } from 'react';
import { Button, Text, Vibration, Platform, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DashboardNav } from 'navigation/DashboardNav'

import SignInScreen from 'screens/SignInScreen'
import SignUpScreen  from 'screens/SignUpScreen'

import { AuthScreen } from 'screens/AuthScreen'

import useFirebase from 'hooks/useFirebase'

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
 
import tailwind from 'tailwind-rn';

import {Support} from 'screens/Support'
const Stack = createStackNavigator();

export const Nav = ()=> {
  const { user, logout, lastName, firstName, userLoading} = useFirebase();

  const[displayRoutes, setDisplayRoutes] = useState(false);
  const[notification, setNotification] = useState('')

  useEffect(()=>{
    console.log(userLoading)
    if(userLoading === false){
      setDisplayRoutes(true)
    }
  },[userLoading])

  if(displayRoutes === false){
    return(
      <View style={tailwind('flex items-center my-24 justify-center')}>           
        <ActivityIndicator/>        
      </View>
    )
  }
  else{
    if(user) {
      return (<NavigationContainer>
      <>
         <Stack.Navigator initialRouteName="Dashboard">                
           <Stack.Screen name="FFA" component={DashboardNav} 
        options={{                      
          headerRight: () => (
            <Button
              onPress={logout}
              title="Logout"
              color="#FF6347"
            />
          ),
        }}
           />
         <Stack.Screen name="Support" component={Support} />
         </Stack.Navigator>  
       </>
   </NavigationContainer>)
    }
    else {
        return  (
          <NavigationContainer>
          <>      
           <Stack.Navigator initialRouteName="AuthScreen">    
              <Stack.Screen name="AuthScreen" component={AuthScreen} 
              options={{ title: '',  headerStyle: {
                backgroundColor: '#10B982',                         elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,  
              }, headerTintColor: '#10B982', }}/>
              <Stack.Screen name="Sign In" component={SignInScreen} 
              />
              <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </Stack.Navigator>
          </>
          </NavigationContainer>
        )   
      }
  }
  return (
    <View>
      <Text> The App is Complete</Text>
    </View>
  )
}

