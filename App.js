import React from "react";
import StoreProvider from "./src/Store/StoreProvider";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import RootNavigator from "./src/Navigators/RootNavigator";

const theme = {
    ...DefaultTheme,
    roundness: 10,
};

const App = () => (
    <StoreProvider>
        <PaperProvider theme={theme}>
            <RootNavigator/>
        </PaperProvider>
    </StoreProvider>
);

export default App;
