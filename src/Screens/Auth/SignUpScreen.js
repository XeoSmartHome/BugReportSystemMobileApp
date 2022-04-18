import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Button, HelperText, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AuthActions } from "../../Store/Auth/actions";

const SignUpScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });
    const [loading, setLoading] = useState(false);

    const signUpSuccess = useCallback(() => {
        setLoading(false);
    }, []);

    const signUpError = useCallback(({ error }) => {
        setLoading(false);
        alert(error);
    }, []);

    const signIn = useCallback(() => {
        setLoading(true);
        const { firstName, lastName, email, password } = getValues();
        AuthActions.signUp(firstName, lastName, email, password)(dispatch).then(signUpSuccess).catch(signUpError);
    }, []);

    const goToSignIn = useCallback(() => {
        navigation.replace("SignIn");
    }, [navigation]);

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps={"handled"}>
            <Controller
                control={control}
                name={"firstName"}
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
                            label={"First Name"}
                            error={error}
                            autoCapitalize={"words"}
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
                name={"lastName"}
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
                            label={"Last Name"}
                            error={error}
                            autoCapitalize={"words"}
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
                Sign up
            </Button>
            <Button
                style={styles.button}
                mode={"outlined"}
                onPress={goToSignIn}
            >
                Sign in
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

export default SignUpScreen;
