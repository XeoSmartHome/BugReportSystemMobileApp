import React, { useCallback, useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../Store/Auth/actions";
import { BugsSelectors } from "../../Store/Bugs/selectors";
import BugCard from "../../Components/BugCard";
import BugsListHeader from "../../Components/BugsListHeader";
import { BugsActions } from "../../Store/Bugs/actions";

const BugsScreen = () => {
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = useState(false);

    const bugs = useSelector(BugsSelectors.selectAllBugs);

    const loadBugsSuccess = useCallback(() => {
        setRefreshing(false);
    }, [setRefreshing]);

    const loadBugsError = useCallback((error) => {
        setRefreshing(false);
        alert(error);
    }, [setRefreshing]);

    const loadBugs = useCallback(() => {
        BugsActions.getBugs()(dispatch).then(loadBugsSuccess).catch(loadBugsError);
    }, []);

    return (
        <FlatList
            data={bugs}
            renderItem={({ item }) => <BugCard bug={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={BugsListHeader}
            contentContainerStyle={styles.contentContainer}
            refreshing={refreshing}
            onRefresh={loadBugs}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        padding: "5%",
    },
});

export default BugsScreen;
