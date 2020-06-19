import React from "react";
import { View, Text, Button } from "react-native";
import LeftDrawer from "./Shared/LeftDrawer";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/AboutUs";
import SignIn from "./Components/AboutUs";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainPage from "./Components/MainPage"
const MainNavigator = createStackNavigator({
    MainPage: { screen: MainPage },
    LeftDrawer: { screen: LeftDrawer },
    AboutUs: { screen: AboutUs },
    ContactUs: { screen: ContactUs },
    SignIn: { screen: SignIn }
},
    {
        initialRouteName: "LeftDrawer",
        headerMode: "none",
        swipeEnabled: false
    });
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;
