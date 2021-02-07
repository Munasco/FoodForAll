import React, { useState, useEffect } from 'react';
import {SafeAreaView,ScrollView, View, TouchableOpacity, Text, Button,
StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import {Dimensions, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import Swiper from 'react-native-swiper'

import useFirebase from 'hooks/useFirebase'

import { Buttons } from 'components/Buttons'



///const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);  
const selectedTab = "border-b-4 border-orange-400 border-t-0 uppercase text-center font-semibold"
const unselectedTab = "uppercase text-center font-semibold"
const activityTimeFrame = [{
  value: 'Today',
},  {
  value: 'Yesterday',
},
{
  value: 'Last Week',
}, {
  value: 'This Week',
},
{
  value: 'This Month',
},
{
  value: 'Last Month',
}];

export const Analytics = ({ navigation }) => {

  
    return (
      <View style={tailwind('h-full bg-gray-100')}>       
          <Text>The World is huge</Text>
         </View>
    
    );
  }
  



const styles = StyleSheet.create({
  Scroll: {
    height: 1000,
    paddingVertical: 30,
}
});