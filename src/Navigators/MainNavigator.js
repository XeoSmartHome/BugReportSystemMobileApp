import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BugsScreen from "../Screens/Bugs/BugsScreen";
import BugScreen from "../Screens/Bugs/BugScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Bugs"} component={BugsScreen}/>
            <Stack.Screen name={"Bug"} component={BugScreen}/>
        </Stack.Navigator>
    );
};

export default MainNavigator;
