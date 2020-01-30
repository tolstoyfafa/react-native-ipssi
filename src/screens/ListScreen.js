import React, { useState, useEffect } from 'react';
import fetchDataVelibsApi from '../components/FetchDataApi';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ListScreen(props) {

    const [state, setState] = useState(
        {
            isConnected: false,
            velibs: []
        }
    )

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff'
        },
        itemContainer: {
            height: 40,
            padding: 3,
            flexDirection: 'row',
            backgroundColor: "#01d1",
            borderRadius: 10,
            marginBottom: 5,
        },
        textItem: {
            fontSize: 20,
            textAlign: 'center',
            color: 'palevioletred'
        }
    });

    useEffect(() => {
        fetchDataVelibsApi('https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json')
            .then((value) => {
                setState({
                    velibs: value,
                    isConnected: true,
                })
            }
            )
    }
        , []);

    const renderItem = ({ item }) =>
        <View style={styles.itemContainer}>
            <Text onPress={() => {
                props.navigation.navigate('Station', {
                    stationDetails: item.fields
                })
            }} style={styles.textItem}>
                {item.fields.station_name}</Text>
        </View>

    return (
        <ScrollView style={styles.container}>
            <Text>{state.isConnected ? 'CONNECTED' : 'NOT CONNECTED'} </Text>
            {/* Todo: ADD a condition to 
            handle no connexion */}

            {state.velibs ?
                (<FlatList
                    data={state.velibs}
                    keyExtractor={(item, index) => item.datasetid}
                    renderItem={renderItem}
                />) :
                (<View>
                    <Text>Can not access to server</Text>
                </View>)
            }
        </ScrollView>
    );
}

ListScreen.navigationOptions = {
    title: "Vélibs",
};


