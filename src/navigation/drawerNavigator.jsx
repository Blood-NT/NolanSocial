import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/customDrawer';
import Icon from 'react-native-vector-icons/Ionicons';


import InsCmtScreen from '../page/Instagram/cmt';
import InsFollowScreen from '../page/Instagram/follow';
import InsLikeScreen from '../page/Instagram/like';
import InsLikeCMTScreen from '../page/Instagram/likeCMT';
import HomeScreen from '../home/home';


const Drawer = createDrawerNavigator();



function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: "#7d5fff",
                drawerActiveTintColor: "#FFFFFF",
                drawerLabelStyle: {
                    marginLeft: -20,
                },
            }}>


            <Drawer.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />



            {/* ins */}
            <Drawer.Screen
                name={"InsCmtScreen"}
                component={InsCmtScreen}
                options={{
                    title: 'InsCmtScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"InsFollowScreen"}
                component={InsFollowScreen}
                options={{
                    title: 'InsFollowScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name={"InsLikeScreen"}
                component={InsLikeScreen}
                options={{
                    title: 'InsLikeScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"InsLikeCMTScreen"}
                component={InsLikeCMTScreen}
                options={{
                    title: 'InsLikeCMTScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            

        </Drawer.Navigator>


    );
}

export default DrawerNavigator;
