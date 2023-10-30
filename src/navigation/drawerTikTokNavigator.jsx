import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/customDrawer';
import Icon from 'react-native-vector-icons/Ionicons';
// fb
import FBLikeScreen from '../page/facebook/like';
import FBCmtScreen from '../page/facebook/cmt';
import FBFollowScreen from '../page/facebook/follow';
import HomeScreen from '../home/home';
import FBLikePageScreen from '../page/facebook/likePage';
import FBLikeTymScreen from '../page/facebook/likeTym';
import FBLikeTymCMTScreen from '../page/facebook/likeTymCMT';
import FBLikeVipScreen from '../page/facebook/likeVip';
import FBShareFakeScreen from '../page/facebook/shareFake';
import FBShareRealScreen from '../page/facebook/shareReal';
import FBViewStory from '../page/facebook/viewStory';
//tiktok
import TiktokCmtScreen from '../page/tiktok/cmt';
import TiktokFollowScreen from '../page/tiktok/follow';
import TiktokLikeVipScreen from '../page/tiktok/likeVip';
import TiktokShareScreen from '../page/tiktok/share';
import TiktokTymVideoScreen from '../page/tiktok/tymVideo';
import TiktokViewScreen from '../page/tiktok/view';
//ins

import InsCmtScreen from '../page/Instagram/cmt';
import InsFollowScreen from '../page/Instagram/follow';
import InsFollowTayScreen from '../page/Instagram/followTay';
import InsLikeScreen from '../page/Instagram/like';
import InsLikeCMTScreen from '../page/Instagram/likeCMT';
import InsLikeTayScreen from '../page/Instagram/likeTay';


const Drawer = createDrawerNavigator();



function DrawerTiktokNavigator() {
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
                        title: 'FBLikePage',
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

                <Drawer.Screen
                    name={"FBlikeTymCMT"}
                    component={FBLikeTymCMTScreen}
                    options={{
                        title: 'FBlikeTymCMT',
                        drawerIcon: ({ focused, color, size }) => (
                            <Icon name="home-sharp" size={18} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name={"FBLikeVip"}
                    component={FBLikeVipScreen}
                    options={{
                        title: 'FBlikeVip',
                        drawerIcon: ({ focused, color, size }) => (
                            <Icon name="home-sharp" size={18} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name={"FBSHareFake"}
                    component={FBShareFakeScreen}
                    options={{
                        title: 'FBShareFake',
                        drawerIcon: ({ focused, color, size }) => (
                            <Icon name="home-sharp" size={18} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name={"FBShareReal"}
                    component={FBShareRealScreen}
                    options={{
                        title: 'FBShareReal',
                        drawerIcon: ({ focused, color, size }) => (
                            <Icon name="home-sharp" size={18} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name={"FBViewStory"}
                    component={FBViewStory}
                    options={{
                        title: 'FBViewStory',
                        drawerIcon: ({ focused, color, size }) => (
                            <Icon name="home-sharp" size={18} color={color} />
                        ),
                    }}
                />
      
            <Drawer.Screen
                name={"TikTokCMT"}
                component={TiktokCmtScreen}
                options={{
                    title: 'TikTokCMT',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"TiktokFollowScreen"}
                component={TiktokFollowScreen}
                options={{
                    title: 'TiktokFollowScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"TiktokLikeVipScreen"}
                component={TiktokLikeVipScreen}
                options={{
                    title: 'TiktokLikeVipScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"TiktokShareScreen"}
                component={TiktokShareScreen}
                options={{
                    title: 'TiktokShareScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"TiktokTymVideoScreen"}
                component={TiktokTymVideoScreen}
                options={{
                    title: 'TiktokTymVideoScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name={"TiktokViewScreen"}
                component={TiktokViewScreen}
                options={{
                    title: 'TiktokViewScreen',
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
                name={"InsFollowTayScreen"}
                component={InsFollowTayScreen}
                options={{
                    title: 'InsFollowTayScreen',
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
            <Drawer.Screen
                name={"InsLikeTayScreen"}
                component={InsLikeTayScreen}
                options={{
                    title: 'InsLikeTayScreen',
                    drawerIcon: ({ focused, color, size }) => (
                        <Icon name="home-sharp" size={18} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>


    );
}

export default DrawerTiktokNavigator;
