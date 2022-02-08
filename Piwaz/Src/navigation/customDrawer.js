/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import { DrawerContentScrollView,  DrawerItemList  } from '@react-navigation/drawer';
import { Body, Button, Container, Content, Footer, H3, Header, Icon, Left, List, ListItem, Right, Switch, Text, Thumbnail} from 'native-base';
import styles from '../Styles/styles';
import Animated, { color }  from 'react-native-reanimated';
import {images } from '../const';
import {DrawerActions,DarkTheme, useTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import { login } from '../Screens';








function Sidebar({progress,...props}){
    const {colors} = useTheme();
    const [darkMode,setDarkMode] = useState(false);
    const translateX = Animated.interpolateNode(progress, {
        inputRange:[0,1],
        outputRange:[-100,0],
    });
return (
<Container  >
    <Header style={{backgroundColor:colors.card, borderBottomWidth:0}} >
<Right>

    <Button style={styles.BUT} onPress={()=>props.navigation.dispatch(DrawerActions.closeDrawer())}>
<Icon name = "menu"  style={{color:colors.text}}/>
    </Button>

</Right>
    </Header>

<Content style={{backgroundColor:colors.card, flex:1}}>
    <ListItem thumbnail> 
        <Left>
            <Thumbnail source = {images.piwaz}/>
        </Left>
    <Body>
        <H3 style={{color:colors.text}}> PIWAZ</H3>
        <Text  style={{color:colors.text}}>
            Food Delivery Services
        </Text>
    </Body>
    </ListItem>
<DrawerContentScrollView {...props} >
        <Animated.View style={{transform:[{translateX}]}}>
     <DrawerItemList {...props} />
</Animated.View>
    </DrawerContentScrollView>
    <List>
        <ListItem>
            <Body>
                <Text style={{color:colors.text}}>
                    Dark Mode
                </Text>
            </Body>
            <Right>
                <Switch value={darkMode} onValueChange={(val)=>{
                    setDarkMode(val);
                    EventRegister.emit('changeThemeEvent', val);
                }}/>
            </Right>
        </ListItem>
    </List>
</Content>
    <Footer style={{backgroundColor:colors.card}} >
    <Left>
 
<Button   
 onPress={()=>props.navigation.dispatch(login)}

transparent
>
<Left style={styles.icc}>
<H3 >
SignIn
<Icon name="people"/>
</H3>

</Left>
</Button>

</Left>

        </Footer>
</Container>

);

}

export default Sidebar;
