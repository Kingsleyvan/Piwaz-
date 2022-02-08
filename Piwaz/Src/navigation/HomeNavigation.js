/* eslint-disable prettier/prettier */
import React from 'react';
import  {createStackNavigator} from '@react-navigation/stack';
import Order from '../Screens/Order';
import Restur from '../Screens/Restur';
import Tabs from '../Screens/Tabs';
import Login from '../Screens/Login/login';

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator
        screenOptions={{headerShown:false}}
        initialRouteName = {'Home'}>
            <Stack.Screen name={'Home'} component={Tabs} />
            <Stack.Screen name={'Order'} component={Order} />
            <Stack.Screen name={'Restur'} component={Restur} />
            <Stack.Screen name={'Login'} component={Login} />


        </Stack.Navigator>

    );

  };

  export default HomeNavigator;
