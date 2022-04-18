import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../Store/Auth/selectors";

const RootNavigator = () => {
    const authenticated = useSelector(AuthSelectors.selectIsAuthenticated());

    return (
        <NavigationContainer>
            {authenticated === true ? <MainNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
};

export default RootNavigator;
