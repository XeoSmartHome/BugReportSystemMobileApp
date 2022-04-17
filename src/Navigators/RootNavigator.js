import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const RootNavigator = () => {
    const authenticated = false;

    return (
        <NavigationContainer>
            {authenticated === true ? <MainNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
};

export default RootNavigator;
