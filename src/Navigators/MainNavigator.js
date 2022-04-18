import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../Screens/Auth/SignInScreen";
import BugsScreen from "../Screens/BugsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Bugs"} component={BugsScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigator;
