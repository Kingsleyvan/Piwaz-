/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigation from '../navigation/HomeNavigation';
import { ABOUT, GALLERY,DEVELOPER,  HOME, Restaurant} from '../constant/routeName';
import {Icon} from 'native-base';
import Sidebar from './customDrawer';
import styles from '../Styles/styles';
import About from '../Screens/About';
import Developer from '../Screens/Developer';
import Gallery from '../Screens/Gallery';
import Order from '../Screens/Order';




const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

return (



   <Drawer.Navigator  drawerContent={props=><Sidebar{...props}/>}>
   <Drawer.Screen name={HOME} component={HomeNavigation}
   options={{drawerIcon:({focused,color,size})=>(
       <Icon name="home"style={styles.ic}/>
   )}}
   />
 <Drawer.Screen name={Restaurant} component={Order}
  options={{drawerIcon:({focused,color,size})=>(
    <Icon name="restaurant"style={styles.ic}/>
)}}
 />
      <Drawer.Screen name={ABOUT} component={About}
       options={{drawerIcon:({focused,color,size})=>(
        <Icon name="people"style={styles.ic}/>
    )}}
      />
      <Drawer.Screen name={GALLERY} component={Gallery}
       options={{drawerIcon:({focused,color,size})=>(
        <Icon name="people"style={styles.ic}/>
    )}} />
      <Drawer.Screen name={DEVELOPER} component={Developer}
       options={{drawerIcon:({focused,color,size})=>(
        <Icon name="people"style={styles.ic}/>
    )}}/>



      </Drawer.Navigator>
);


};

export default DrawerNavigator;
