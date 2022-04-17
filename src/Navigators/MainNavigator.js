import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Main"} component={null}/>
        </Stack.Navigator>
    );
};

export default MainNavigator;
