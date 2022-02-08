/* eslint-disable prettier/prettier */

import React from 'react';
import {AppRegistry} from 'react-native';
import AppNavContainer from './Src/navigation/index';

const App = () => {
    return (
        <AppNavContainer />
    );
};



AppRegistry.registerComponent('Piwaz', () => App);
