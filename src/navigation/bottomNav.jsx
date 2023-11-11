import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import { FontAwesome5 } from "@expo/vector-icons";
import { View, Platform } from "react-native";
import HomeScreen from "../home/home";
import FbAllScreen from "../routingg/fbAllscreen";
import TiktokAllScreen from "../routingg/tiktokAllscreen";
import INSAllscreen from "../routingg/INSAllscreen";
import PersonalInfoScreen from "../home/profile";
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10,
          },
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "#2FDBBC" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="fbAll"
        component={FbAllScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="facebook"
                size={20}
                color={focused ? "#2FDBBC" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={TiktokAllScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="tiktok"
                size={20}
                color={focused ? "#2FDBBC" : "gray"}
              ></FontAwesome5>
            </View>
          ),
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={INSAllscreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="instagram-square"
                size={20}
                color={focused ? "#2FDBBC" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />
             <Tab.Screen
        name="PersonalInfoScreen"
        component={PersonalInfoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="user"
                size={20}
                color={focused ? "#2FDBBC" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
