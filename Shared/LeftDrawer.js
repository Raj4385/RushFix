import React from "react";
import {Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import LeftSideBar from "./leftsidebar";
import MainPage from "../Components/MainPage";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";

const WIDTH = Dimensions.get('window').width;

const LeftDrawer = createDrawerNavigator(
    {
        MainPage: { screen: MainPage },
        AboutUs: {screen: AboutUs},
        ContactUs: {screen: ContactUs}
    },
    {
        initialRouteName: "MainPage",
        drawerWidth: WIDTH * 0.80,
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <LeftSideBar {...props} />,
        drawerOpenRoute: 'LeftSideMenu',
        drawerCloseRoute: 'LeftSideMenuClose',
        drawerToggleRoute: 'LeftSideMenuToggle',
    }
);
export default LeftDrawer;