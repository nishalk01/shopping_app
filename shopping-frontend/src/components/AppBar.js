import  React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {DrawerActions} from '@react-navigation/native'
// import {navigate} from '../RootNavigation';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const AppBar = (props) => {
return(
    <Appbar.Header> 
        <Appbar.Action icon={MORE_ICON} onPress={() => {props.nav.toggleDrawer()}} />
       <Appbar.Content title="ShopMart" />
    </Appbar.Header>
)};

export default AppBar;