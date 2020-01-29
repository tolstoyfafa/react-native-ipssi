import React from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

export default function ListScreen() {
    return (
        <FlatList
            style={styles.container}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }}
            data={[
                { id: "1", title: "Station 1" },
                { id: "2", title: "Station 2" },
                { id: "3", title: "Station 3" },
                { id: "4", title: "Station 4" },
            ]}
            keyExtractor={item => item.id}
        />
    );
}

ListScreen.navigationOptions = {
    title: "Vélibs",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
