import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BugsListHeader = () => {
    const navigation = useNavigation();

    const goToCreateBugScreen = useCallback(() => {
        navigation.navigate("Bug", { scope: "CreateBug" });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Title>Hello, Claudiu</Title>
                <Button
                    mode={"contained"}
                    onPress={goToCreateBugScreen}
                    icon={"plus"}
                    contentStyle={styles.addButton}
                >
                    Create
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    addButton: {
        flexDirection: "row-reverse",
    },
});

export default BugsListHeader;
