import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, HelperText, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../Store/Auth/actions";

const SignInScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const [loading, setLoading] = useState(false);

    const signInSuccess = useCallback(() => {
        setLoading(false);
    }, []);

    const signInError = useCallback(({ error }) => {
        setLoading(false);
        alert(error);
    }, []);

    const signIn = useCallback(() => {
        setLoading(true);
        const { email, password } = getValues();
        AuthActions.signIn(email, password)(dispatch).then(signInSuccess).catch(signInError);
    }, []);

    const goToSignUp = useCallback(() => {
        navigation.replace("SignUp");
    }, [navigation]);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <Controller
                control={control}
                name={"email"}
                rules={{
                    required: true,
                }}
                render={({ field: { ref, value, onChange, onBlur }, fieldState: { error } }) =>
                    <>
                        <TextInput
                            ref={ref}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            mode={"outlined"}
                            label={"Email"}
                            error={error}
                            keyboardType={"email-address"}
                            autoCapitalize={"none"}
                            autoComplete={"email"}
                            autoCorrect={false}
                        />
                        <HelperText type={"error"}>
                            {error?.type}
                        </HelperText>
                    </>
                }
            />
            <Controller
                control={control}
                name={"password"}
                rules={{
                    required: true,
                }}
                render={({ field: { ref, value, onChange, onBlur }, fieldState: { error } }) =>
                    <>
                        <TextInput
                            ref={ref}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            mode={"outlined"}
                            label={"Password"}
                            error={error}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoComplete={"password"}
                            autoCorrect={false}
                        />
                        <HelperText type={"error"}>
                            {error?.type}
                        </HelperText>
                    </>
                }
            />
            <Button
                style={styles.button}
                mode={"contained"}
                onPress={handleSubmit(signIn)}
                loading={loading}
            >
                Sign in
            </Button>
            <Button
                style={styles.button}
                mode={"outlined"}
                onPress={goToSignUp}
            >
                Sign up
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        justifyContent: "center",
        padding: "5%",
    },
    button: {
        marginVertical: 20,
    },
});

export default SignInScreen;
