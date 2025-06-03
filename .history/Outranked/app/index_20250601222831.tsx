import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen"; // <- Renamed to "Guides"
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CourseListScreen from "../screens/CourseListScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
       import { Ionicons } from "@expo/vector-icons";

// Inside screenOptions
tabBarIcon: ({ focused, color, size }) => {
  let iconName = "home-outline";

  if (route.name === "Courses") {
    iconName = focused ? "book" : "book-outline";
  } else if (route.name === "Guides") {
    iconName = focused ? "document-text" : "document-text-outline";
  } else if (route.name === "Profile") {
    iconName = focused ? "person" : "person-outline";
  } else if (route.name === "Settings") {
    iconName = focused ? "settings" : "settings-outline";
  }

  return <Ionicons name={iconName} size={size} color={color} />;

        },
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 4,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Courses"
        component={CourseListScreen}
        options={{ title: "Courses" }}
      />
      <Tab.Screen
        name="Guides"
        component={HomeScreen}
        options={{ title: "Guides" }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}
