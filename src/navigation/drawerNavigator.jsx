import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/customDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../components/customDrawer';
import FBLikeScreen from '../page/facebook/like';
import FBCmtScreen from '../page/facebook/cmt';
import FBFollowScreen from '../page/facebook/follow';
import FBLikePageScreen from '../page/facebook/likepage';


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: "#7d5fff",
                drawerActiveTintColor: "FFFFFF",
                drawerLabelStyle: {
                    marginLeft: -20,
                },
            }}>
            <Drawer.Screen
                name={"FBlike"}
                component={FBLikeScreen}
                options={{
                    title: 'FBlike',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name={"FBcmt"}
                component={FBCmtScreen}
                options={{
                    title: 'FBcmt',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name={"FBfollow"}
                component={FBFollowScreen}
                options={{
                    title: 'FBfollow',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />

<Drawer.Screen
                name={"FBLikePage"}
                component={FBLikePageScreen}
                options={{
                    title: 'FBfollow',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"FBLikeTym"}
                component={FBLikeTymScreen}
                options={{
                    title: 'FBLikeTym',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />





        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
