import React, { useState, useEffect } from 'react';
import {SafeAreaView,ScrollView, View, TouchableOpacity, Text, Switch, Button,
StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import {Dimensions, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';

import useFirebase from 'hooks/useFirebase'


export const Buttons = ({title, onPress, color, textStyle}) => {
    return (

      <TouchableOpacity onPress={onPress} style={[{ alignSelf: "center", backgroundColor: color ? color : "#10B982",
             shadowColor: "#000",
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             shadowOpacity: 0.29,
             shadowRadius: 4.65,             
             }, 
            tailwind("rounded-full flex w-full h-10 items-center justify-around")]}>              
              <Text style={textStyle ? textStyle : tailwind("text-xl")}>{ title }</Text>           
            </TouchableOpacity> 
    )
        
}


