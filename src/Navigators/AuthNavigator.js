import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"SignIn"} component={null}/>
        </Stack.Navigator>
    );
};

export default AuthenticationNavigator;
