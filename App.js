import React from "react";
import StoreProvider from "./src/Store/StoreProvider";
import {Provider as PaperProvider} from "react-native-paper";
import RootNavigator from "./src/Navigators/RootNavigator";

const App = () => (
    <StoreProvider>
        <PaperProvider>
            <RootNavigator/>
        </PaperProvider>
    </StoreProvider>
);

export default App;
