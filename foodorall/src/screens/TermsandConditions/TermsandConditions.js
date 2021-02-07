import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity, Text, Switch, Button,
StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import AppLoading from 'expo';
import {Dimensions, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import {Feather} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';

import useFirebase from 'hooks/useFirebase'


export const TermsandConditions = () => {

    return (
        <ScrollView>
            <View>
                <Text style={tailwind("text-lg p-2")}>TERMS OF USE</Text>
                <Text>Last updated July 12, 2020</Text>
                <Text>AGREEMENT TO TERMS</Text>
                <Text> 
    damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing bythe parties hereto to execute these Terms of Use
    </Text>
            </View>
        </ScrollView>
    )

}

