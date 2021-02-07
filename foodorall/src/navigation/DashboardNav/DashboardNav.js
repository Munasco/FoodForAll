
import React from 'react';
import { Button, View } from 'react-native'
import useFirebase from 'hooks/useFirebase'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign'
import { Feather } from '@expo/vector-icons'; 


import { Entypo } from '@expo/vector-icons'; 

import tailwind from 'tailwind-rn'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const iosStyle = {
  position: "absolute",
  left: -150,
  top: -20, 
  fontSize: 25,
  paddingTop: 10
}

import { Analytics } from 'screens/Analytics'
import { ViewQR } from '../../screens/QR/ViewQR'
import {CreateCustomer } from '../../screens/QR/CreateCustomer'
import { CustomerDetails } from 'screens/QR/CustomerDetails'

import {Support} from 'screens/Support'


import {Settings } from 'screens/Settings'
import {Profile} from 'screens/Profile'
import { TermsandConditions } from 'screens/TermsandConditions'

//TODO: MOVE STACKS TO SEPEARATE FOLDERS
const HomeStack = createStackNavigator();

function HomeStackScreen ({navigation}){
  const { user, logout } = useFirebase()
 
  
    return(
      <HomeStack.Navigator initialRouteName={"Analytics"}>
            <HomeStack.Screen name="Analytics" component={ Analytics } 
                    options={{ title: `Hello Ikpe !` ,                                                            
                    headerTitleStyle: 
                      Platform.OS === 'ios' ? iosStyle: {
                        fontSize: 30
                      },
                      headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,                        
                      },
                      headerRight: () => (
                        <View style={tailwind("flex mx-4")}>               
                        <Entypo name="chat" size={24} color="black" onPress={() => navigation.navigate("Support")}/>
                      </View>  
                      )
                  }}     
                    />                   

              <HomeStack.Screen name="Create Customer"            
              component={CreateCustomer}
              />
              <HomeStack.Screen name="Settings" component={Settings} />
              <HomeStack.Screen name="Profile" component={Profile} />
              <HomeStack.Screen name="Terms and Conditions" component={TermsandConditions} />
              
         </HomeStack.Navigator>
    )
}

const QRStack = createStackNavigator();

function QRStackScreen({ navigation }){
  return(
    <QRStack.Navigator>
      <QRStack.Screen name="QR" 
          options={{
            headerRight: ()=> (
                <Icon onPress={()=>navigation.navigate("Create Customer")} style={tailwind("text-lg p-3")}name={'plus'} />
            ),
            headerCenter: ()=> (
              <Icon onPress={()=>navigation.navigate("Create Customer")} style={tailwind("text-lg p-3")}name={'plus'} />
          ),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          }  
         }}
         component={ ViewQR } />
        <QRStack.Screen name="Create Customer"            
            component={CreateCustomer}
        />
         <QRStack.Screen name="Customer Details"
            component={CustomerDetails}
        />
          

    </QRStack.Navigator>
  )
}


const AccountStack = createStackNavigator();

function AccountStackScreen ({navigation}){ 
    return(
      <AccountStack.Navigator initialRouteName={"Settings"}>
              <HomeStack.Screen name="Settings" component={Settings} 
               options={{      
              headerStyle: {
                elevation: 0,
                
                shadowOpacity: 0,
                borderBottomWidth: 0,
              }  
             }}/>
              <HomeStack.Screen name="Profile" component={Profile} />
              <HomeStack.Screen name="Contact Us" component={Contactus} />
              <HomeStack.Screen name="Terms and Conditions" component={TermsandConditions} />
              
         </AccountStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export const DashboardNav = () => {
  return (
      
            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
                } else if (route.name === 'QR') {
                  iconName = focused
                  ? 'ios-people'
                  : 'ios-people';
                }
                else if (route.name === 'Account') {
                  iconName = focused
                  ? 'ios-person'
                  : 'ios-person';
                }
          
          return <Ionicons name={iconName} size={size} color={color}     />;
            },            
          })}
      tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'gray',
          }}>
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="QR" component={QRStackScreen} />
              <Tab.Screen name="Account" component={AccountStackScreen} />
            </Tab.Navigator>
          
        );
}

