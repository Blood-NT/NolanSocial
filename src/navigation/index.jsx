
import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../home/login';
import RegisterScreen from '../home/register';
import ForgotPassScreen from '../home/forgotPass';
import HomeScreen from '../home/home';
import { notifiContext } from "../context/notifiContext";
import Notifi from "../components/Notifi";
import DrawerNavigator from "./drawerNavigator";
import PersonalInfoScreen from "../home/profile";
import 'react-native-gesture-handler';
import BottomTabNavigator from "./bottomNav";

import FBCmtScreen from "../page/facebook/cmt";
import FBFollowScreen from "../page/facebook/follow";
import FBLikeScreen from "../page/facebook/like";
import FBLikePageScreen from "../page/facebook/likePage";
import FBLikeTymScreen from "../page/facebook/likeTym";
import FBLikeTymCMTScreen from "../page/facebook/likeTymCMT";
import FBLikeVipScreen from "../page/facebook/likeVip";
import FBShareFakeScreen from "../page/facebook/shareFake";
import FBShareRealScreen from "../page/facebook/shareReal";
import FBViewStoryScreen from "../page/facebook/viewStory";

//tiktok
import TiktokCmtScreen from '../page/tiktok/cmt';
import TiktokFollowScreen from '../page/tiktok/follow';
import TiktokLikeVipScreen from '../page/tiktok/likeVip';
import TiktokShareScreen from '../page/tiktok/share';
import TiktokShareLiveScreen from '../page/tiktok/shareLive';
import TiktokTymScreen from '../page/tiktok/tymVideo';
import TiktokViewScreen from '../page/tiktok/view';




// ins
import InsCmtScreen from '../page/Instagram/cmt';
import InsFollowScreen from '../page/Instagram/follow';
import InsLikeScreen from '../page/Instagram/like';
import InsLikeCMTScreen from '../page/Instagram/likeCMT';

const Stack = createNativeStackNavigator();

export default function AppNav() {
  const { notifi, setNotifi } = useContext(notifiContext);

  return (
    <>
    
    <NavigationContainer>

      
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{ headerShown:false }}
       
        >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="HomeScreen" component={DrawerNavigator} /> */}
        <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
        {/* fb */}
        <Stack.Screen name="fbCmt" component={FBCmtScreen} />
        <Stack.Screen name="fbFollow" component={FBFollowScreen} />
        <Stack.Screen name="fbLike" component={FBLikeScreen} />
        <Stack.Screen name="fbLikePage" component={FBLikePageScreen} />
        <Stack.Screen name="fbLikeTym" component={FBLikeTymScreen} />
        <Stack.Screen name="fbLikeTymCMT" component={FBLikeTymCMTScreen} />
        <Stack.Screen name="fbLikeVip" component={FBLikeVipScreen} />
        <Stack.Screen name="fbShareFake" component={FBShareFakeScreen} />
        <Stack.Screen name="fbShareReal" component={FBShareRealScreen} />
        <Stack.Screen name="fbViewStory" component={FBViewStoryScreen} />

        {/* tiktok */}
        <Stack.Screen name="tiktokCmt" component={TiktokCmtScreen} />
        <Stack.Screen name="tiktokFollow" component={TiktokFollowScreen} />
        <Stack.Screen name="tiktokLikeVip" component={TiktokLikeVipScreen} />
        <Stack.Screen name="tiktokShare" component={TiktokShareScreen} />
        <Stack.Screen name="tiktokShareLive" component={TiktokShareLiveScreen} />
        <Stack.Screen name="tiktokTym" component={TiktokTymScreen} />
        <Stack.Screen name="tiktokView" component={TiktokViewScreen} />

        {/* ins */}
        <Stack.Screen name="insCmt" component={InsCmtScreen} />
        <Stack.Screen name="insFollow" component={InsFollowScreen} />
        <Stack.Screen name="insLike" component={InsLikeScreen} />
        <Stack.Screen name="insLikeCMT" component={InsLikeCMTScreen} />
        <Stack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    {notifi[0] && <Notifi notifi={notifi} setNotifi={setNotifi} />}

    </>
  );
};
