import React, { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, HelperText, TextInput } from "react-native-paper";
import { BugsActions } from "../../Store/Bugs/actions";
import { useDispatch } from "react-redux";

const BugScreen = ({ navigation, route: { params: { scope } } }) => {
    const dispatch = useDispatch();
    const { control, getValues, handleSubmit } = useForm({
        defaultValues: {
            title: "",
            description: "",
            status: "",
        },
    });

    const createBugSuccess = useCallback(() => {
        console.log(":asdasdasdadas");
        navigation.goBack();
    }, [navigation]);

    const createBugError = useCallback((error) => {
        console.log("error", error);
    }, []);

    const createBug = useCallback(() => {
        const { title, description, status } = getValues();
        console.log(title, description, status);
        BugsActions.createBug(title, description, status)(dispatch).then(createBugSuccess).catch(createBugError);
    }, [getValues]);

    const onPress = useCallback(() => {
        switch (scope) {
            case "CreateBug":
                createBug();
                break;
            default:
                console.warn("scope not found");
                break;
        }
    }, [scope, createBug]);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Controller
                control={control}
                name={"title"}
                rules={{
                    required: true,
                }}
                render={
                    ({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                mode={"outlined"}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                label={"Title"}
                            />
                            <HelperText type={"error"}>
                                {error?.type}
                            </HelperText>
                        </>
                    )
                }
            />
            <Controller
                control={control}
                name={"description"}
                rules={{
                    required: true,
                }}
                render={
                    ({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                mode={"outlined"}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                label={"Description"}
                                multiline={true}
                                numberOfLines={10}
                            />
                            <HelperText type={"error"}>
                                {error?.type}
                            </HelperText>
                        </>
                    )
                }
            />
            <Controller
                control={control}
                name={"status"}
                rules={{
                    required: true,
                }}
                render={
                    ({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                        <>
                            <TextInput
                                mode={"outlined"}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                label={"Status"}
                            />
                            <HelperText type={"error"}>
                                {error?.type}
                            </HelperText>
                        </>
                    )
                }
            />
            <Button
                mode={"contained"}
                onPress={handleSubmit(onPress)}
            >
                Save
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: "5%",
    },
});

export default BugScreen;
