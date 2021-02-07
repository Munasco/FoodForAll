import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Linking } from 'expo';
import tailwind from 'tailwind-rn';
import { Entypo } from '@expo/vector-icons'; 


export const Support = () => {
    return (
        <View style={tailwind('bg-white flex flex-row justify-around h-8 w-full my-12')}> 
            <Text>Chat with Support</Text>    
            <Entypo name="chat" size={24} color="black" onPress={()=>Linking.openURL('sms:+15313352024?body=Hello, I have a question for the support team ... ')}/>                    
        </View>
    )
}