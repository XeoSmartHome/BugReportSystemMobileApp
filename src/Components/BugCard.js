import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Paragraph, Subheading, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BugCard = ({ bug: { id, title, status, updatedAt } }) => {
    const navigation = useNavigation();

    const goToEditBug = useCallback(() => {
        navigation.navigate("Bug", { scope: "EditBug", bugId: id });
    }, [id, navigation]);

    return (
        <TouchableOpacity style={styles.card} onPress={goToEditBug}>
            <Title>
                {title}
            </Title>
            <Subheading>
                Status: {status}
            </Subheading>
            <Paragraph>
                Last modified: {updatedAt}
            </Paragraph>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 6,
        marginVertical: 10,
    },
});

export default BugCard;
