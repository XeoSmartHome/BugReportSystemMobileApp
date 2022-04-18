import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../Screens/Auth/SignInScreen";
import SignUpScreen from "../Screens/Auth/SignUpScreen";

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"SignIn"} component={SignInScreen}/>
            <Stack.Screen name={"SignUp"} component={SignUpScreen}/>
        </Stack.Navigator>
    );
};

export default AuthenticationNavigator;
