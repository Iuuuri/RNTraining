/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, Image } from 'react-native';
import SplashLogo from './components/splash-logo';

const SplashScreen = () => {
    return(
        <View style={{flex: 6, backgroundColor: '#ffffff'}}>
            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./assets/imgs/Logo.png')} />
            </View>
            <View style={{flex: 2}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                      <Image source={require('./assets/imgs/Group12637.png')} />
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{textAlign:"center", fontFamily: 'Poppins-Regular', fontWeight: '400', fontSize: 13, lineHeight: 16, color: "#1d1617", paddingBottom: 20}}>Projeto confinado pelo INR, I.P.</Text>
                    <Image source={require('./assets/imgs/Group12638.png')} />
                </View>
            </View>
        </View>
    );
};

export default SplashScreen;
