/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';

import {NavigationContainer, DefaultTheme,DarkTheme ,useTheme} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigatot';
import { EventRegister } from 'react-native-event-listeners';





const AppNavContainer = () => {
  const [darkApp,setDarkApp] = useState(false);
  const appTheme = darkApp ? DarkTheme : DefaultTheme;
  useEffect(()=>{
    let eventListener = EventRegister.addEventListener('changeThemeEvent', (
      data) => {
        setDarkApp(data);

  }
  );
    return ()=> {
      EventRegister.removeEventListener(eventListener);
    };
  },[]);
  return (
    <NavigationContainer theme={appTheme}>
     <DrawerNavigator />




    </NavigationContainer>
  );
};

export default AppNavContainer;
