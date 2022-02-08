/* eslint-disable prettier/prettier */
import React from 'react';
import {Image,TouchableOpacity,View} from 'react-native';
import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home } from '../Screens';
import {COLORS,icons} from '../const';
import styles from '../Styles/styles';
import Svg, { Path } from 'react-native-svg';

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

var isSelected = accessibilityState.selected;

if (isSelected) {
    return (
<View  style={styles.icon}>
<View style={styles.view1}>
<View style={styles.view2} />
<Svg
width={75}
height={61}
viewBox="0 0 75 61"

>

<Path
 d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
 fill={COLORS.white}

/>



</Svg>

<View style={styles.view2} />





</View>
<TouchableOpacity
style={styles.touch}
onPress={onPress}
>
{children}
</TouchableOpacity>
</View>
    );
}
else {
    return (
<TouchableOpacity
style={styles.touch2}
activeOpacity={1}
onPress={onPress}
>
{children}
</TouchableOpacity>
    );
}
};

const CustomTabBar = (props) => {
    return (
        <View>
            <View


             />
        <BottomTabBar {...props.props}/>
        </View>
    );

};

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions = {{
            showLabel:false,
            style:{backgroundColor:'transparent',
            borderTopWidth:0,
            elevation:0,
            },

        } }

      tabBar = {(props) => (
          <CustomTabBar
          props ={props}
          />

      )}
        >
        <Tab.Screen
        name = "Home"
        component = {Home}
        options = {{
            tabBarIcon :({focused}) =>(
                <Image
                source = {icons.cutlery}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                 style = {{
                    width:25,
                    height:25,
                    tintColor: focused ? COLORS.primary :  COLORS.secondary,

                 }}
                />
            ),
            tabBarButton: (props) => (
                <TabBarCustomButton
                    {...props}
                />
            ),

        }}

        />

<Tab.Screen
        name = "like"
        component = {Home}
        options = {{
            tabBarIcon :({focused}) =>(
                <Image
                source = {icons.search}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? COLORS.primary :  COLORS.secondary,

                }}

                />
            ),
            tabBarButton: (props) => (
                <TabBarCustomButton
                    {...props}
                />
            ),
        }}

        />

<Tab.Screen
        name = "user"
        component = {Home}
        options = {{
            tabBarIcon :({focused}) =>(
                <Image
                source = {icons.user}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? COLORS.primary :  COLORS.secondary,

                }}

                />
            ),
            tabBarButton: (props) => (
                <TabBarCustomButton
                    {...props}
                />
            ),

        }}

        />

<Tab.Screen
        name = "search"
        component = {Home}
        options = {{
            tabBarIcon :({focused}) =>(
                <Image
                source = {icons.like}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? COLORS.primary :  COLORS.secondary,

                }}

                />
            ),
            tabBarButton: (props) => (
                <TabBarCustomButton
                    {...props}
                />
            ),
        }}

        />


        </Tab.Navigator>
    );
};





export default Tabs;
