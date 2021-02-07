import React from 'react'
import { Text, SafeAreaView, View, Image, Button } from 'react-native'
import tailwind from 'tailwind-rn'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'
import {Buttons} from '../../components/Buttons'
/**
 * 
 https://www.npmjs.com/package/@expo-google-fonts/nunito-sans
 */
export const AuthScreen = ({navigation}) => {
    return (
        <SafeAreaView style={tailwind('flex flex-col h-full bg-green-500')}>
             <Image
                style={tailwind("flex self-center my-32 mb-12")}
                source={require('./assets/icon.png')}
            />                                         
            <Text style={tailwind("h-4")}>{' \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'} </Text>          
            <View style={tailwind("flex w-56 self-center py-2")}>

                <View style={tailwind("bg-green-400 rounded-full mb-3")}>
                    <Buttons
                     color="#ffffff"                  
                    title="Sign in"
                    testID="signin-btn"
                    onPress={()=>navigation.navigate('Sign In')}                                       
                    />
                </View>
               
                  <Buttons
                  color="#ffffff"                  
                  onPress={()=>navigation.navigate('Sign Up')}
                  title="Sign Up"        
                  textStyle={tailwind("text-xl text-black")}                    
                />
            </View>
        </SafeAreaView>
    )
}