import React, { useCallback } from "react";
import { View } from "react-native";
import { Button, Text, Title } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AuthActions } from "../Store/Auth/actions";

const BugsScreen = () => {
    const dispatch = useDispatch();

    const signOut = useCallback(() => {
        AuthActions.signOut()(dispatch);
    })

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Title>TWelcome to BugReportSystem</Title>
            <Button
                mode={"contained"}
                onPress={signOut}
            >
                Sign out
            </Button>
        </View>
    );
};


export default BugsScreen;
