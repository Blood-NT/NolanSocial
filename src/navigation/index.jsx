import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../home/login';
import RegisterScreen from '../home/register';
import ForgotPassScreen from '../home/forgotPass';
import HomeScreen from '../home/home';
import { notifiContext } from "../context/notifiContext";
import Notifi from "../components/Notifi";

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
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    {notifi[0] && <Notifi notifi={notifi} setNotifi={setNotifi} />}

    </>
  );
};
