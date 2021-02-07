import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {SafeAreaView, View, TouchableOpacity, Text, ScrollView,  TextInput, Modal, TouchableHighlight,
ActivityIndicator, Alert} from 'react-native';
import tailwind from 'tailwind-rn';
import Icon from 'react-native-vector-icons/AntDesign'
import { Ionicons } from '@expo/vector-icons';
import useFirebase from 'hooks/useFirebase'
// import {
//     selectCustomers,
//     fetchCustomers,
//     setCustomer,
//     deleteCustomer
// } from 'state/customers/customerSlice'
// import {
//     fetchCustomersData
// } from 'routes/customerRoutes'
// import { deleteCustomerRoute } from 'routes/customerRoutes';
// import { FancyAlert } from 'react-native-expo-fancy-alerts';
// import { Get, Post } from 'utils/fetchUtils'
import { Buttons } from 'components/Buttons'

export const ViewCustomers = ({navigation}) => {

    
    
    return (
    <SafeAreaView style={tailwind('h-full bg-white')}>   
     </SafeAreaView>     
    );
}